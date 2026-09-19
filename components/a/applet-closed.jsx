import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wazvzmbyi.css';
import '../../css/f/fzkyp8b7q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="wazvzmbyi"/><path class="fzkyp8b7q"/></g>`,
		"fallback": "icon-park-solid:applet-closed",
	});
}

export default Component;
