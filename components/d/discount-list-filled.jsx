import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy6voyb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy6voyb_i"/>`,
		"fallback": "tdesign:discount-list-filled",
	});
}

export default Component;
