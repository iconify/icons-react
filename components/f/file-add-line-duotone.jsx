import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aqzhvubby.css';
import '../../css/u/uxu9sdxqs.css';
import '../../css/z/zr35ecbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aqzhvubby"/><path class="uxu9sdxqs"/><path class="zr35ecbmr"/></g>`,
		"fallback": "solar:file-add-line-duotone",
	});
}

export default Component;
