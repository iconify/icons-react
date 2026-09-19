import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/tia2wlril.css';
import '../../css/z/z5rcj_bcz.css';
import '../../css/w/whcbbl0vz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="tia2wlril"/><path class="z5rcj_bcz"/><path class="whcbbl0vz"/></g>`,
		"fallback": "icon-park-outline:avocado-one",
	});
}

export default Component;
