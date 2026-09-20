import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf7fl8b9z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yf7fl8b9z"/>`,
		"fallback": "ix:chart-value-vertical",
	});
}

export default Component;
