import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j-oxkogyv.css';
import '../../css/h/hsv7e4b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j-oxkogyv"/><path class="hsv7e4b8d"/></g>`,
		"fallback": "hugeicons:folder-video",
	});
}

export default Component;
