import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0amc9iyh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0amc9iyh"/>`,
		"fallback": "streamline-plump:focus-points",
	});
}

export default Component;
