import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zr35ecbmr.css';
import '../../css/b/b4cd0mb_l.css';
import '../../css/e/e0cmz0boh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zr35ecbmr"/><path class="b4cd0mb_l"/><path class="e0cmz0boh"/></g>`,
		"fallback": "solar:file-image-linear",
	});
}

export default Component;
