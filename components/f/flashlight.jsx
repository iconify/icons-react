import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wb9-tbcgv.css';
import '../../css/h/hqy_5wbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wb9-tbcgv"/><path class="hqy_5wbyz"/></g>`,
		"fallback": "proicons:flashlight",
	});
}

export default Component;
