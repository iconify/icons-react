import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipuwr9bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipuwr9bxw"/>`,
		"fallback": "mdi-light:closed-caption",
	});
}

export default Component;
