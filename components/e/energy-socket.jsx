import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dc3vmxbte.css';
import '../../css/c/c0yckqbit.css';
import '../../css/i/iaiylo83l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="dc3vmxbte"/><path class="c0yckqbit"/><path class="iaiylo83l"/></g>`,
		"fallback": "icon-park-solid:energy-socket",
	});
}

export default Component;
