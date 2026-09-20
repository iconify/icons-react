import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u4g7gnbow.css';
import '../../css/e/eu6l9lbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u4g7gnbow"/><path class="eu6l9lbtn"/></g>`,
		"fallback": "mynaui:copyright-off",
	});
}

export default Component;
