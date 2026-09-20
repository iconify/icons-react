import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f--jrem6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f--jrem6c"/>`,
		"fallback": "streamline-ultimate:color-picker-2-bold",
	});
}

export default Component;
