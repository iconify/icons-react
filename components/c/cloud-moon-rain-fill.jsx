import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dybjt6lww.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dybjt6lww"/>`,
		"fallback": "f7:cloud-moon-rain-fill",
	});
}

export default Component;
