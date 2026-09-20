import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vaihz8b-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vaihz8b-m"/>`,
		"fallback": "reicon:align-vertically-filled",
	});
}

export default Component;
