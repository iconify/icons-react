import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d82fz4w8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d82fz4w8b"/>`,
		"fallback": "coolicons:calendar-check-fill-round",
	});
}

export default Component;
