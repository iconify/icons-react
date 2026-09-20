import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmexoo1yb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmexoo1yb"/>`,
		"fallback": "reicon:close-square-filled",
	});
}

export default Component;
