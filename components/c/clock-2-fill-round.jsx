import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7is6ubrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7is6ubrr"/>`,
		"fallback": "coolicons:clock-2-fill-round",
	});
}

export default Component;
