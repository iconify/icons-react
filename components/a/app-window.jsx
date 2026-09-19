import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aje3y_4qq.css';
import '../../css/f/f5mkz9bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aje3y_4qq"/><path class="f5mkz9bge"/></g>`,
		"fallback": "hugeicons:app-window",
	});
}

export default Component;
