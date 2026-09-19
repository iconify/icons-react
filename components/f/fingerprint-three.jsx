import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/i70egobdq.css';
import '../../css/c/csw_8r-nn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="i70egobdq"/><path class="csw_8r-nn"/></g>`,
		"fallback": "icon-park-outline:fingerprint-three",
	});
}

export default Component;
