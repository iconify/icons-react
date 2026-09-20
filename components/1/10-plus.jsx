import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txvyr0b6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txvyr0b6k"/>`,
		"fallback": "uil:10-plus",
	});
}

export default Component;
