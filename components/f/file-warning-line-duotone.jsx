import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aqzhvubby.css';
import '../../css/f/fcclfacgt.css';
import '../../css/n/ndk9d1-za.css';
import '../../css/z/zr35ecbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aqzhvubby"/><path class="fcclfacgt"/><path class="ndk9d1-za"/><path class="zr35ecbmr"/></g>`,
		"fallback": "solar:file-warning-line-duotone",
	});
}

export default Component;
