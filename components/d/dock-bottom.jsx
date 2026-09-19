import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mssb4p5se.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mssb4p5se"/>`,
		"fallback": "gg:dock-bottom",
	});
}

export default Component;
