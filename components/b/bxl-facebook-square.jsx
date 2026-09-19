import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeq6kv7wx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeq6kv7wx"/>`,
		"fallback": "bx:bxl-facebook-square",
	});
}

export default Component;
