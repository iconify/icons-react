import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtvztsq6v.css';
import '../../css/v/v-s_jsdhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtvztsq6v"/><path class="v-s_jsdhx"/>`,
		"fallback": "circum:dollar",
	});
}

export default Component;
