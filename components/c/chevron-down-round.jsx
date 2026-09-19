import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwoki8b0o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwoki8b0o"/>`,
		"fallback": "icons8:chevron-down-round",
	});
}

export default Component;
