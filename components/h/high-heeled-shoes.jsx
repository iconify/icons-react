import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/iodpzobei.css';
import '../../css/i/iehr1opfa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="iodpzobei"/><path class="iehr1opfa"/></g>`,
		"fallback": "icon-park-solid:high-heeled-shoes",
	});
}

export default Component;
