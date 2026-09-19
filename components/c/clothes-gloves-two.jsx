import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cnu9c37td.css';
import '../../css/f/fcyrx-bii.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="cnu9c37td"/><path class="fcyrx-bii"/></g>`,
		"fallback": "icon-park-solid:clothes-gloves-two",
	});
}

export default Component;
