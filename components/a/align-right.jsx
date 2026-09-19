import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwtu_ug1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwtu_ug1u"/>`,
		"fallback": "iconoir:align-right",
	});
}

export default Component;
