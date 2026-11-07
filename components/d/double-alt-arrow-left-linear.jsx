import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uvan74bwi.css';
import '../../css/p/pxg4flwco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uvan74bwi"/><path class="pxg4flwco"/></g>`,
		"fallback": "solar:double-alt-arrow-left-linear",
	});
}

export default Component;
