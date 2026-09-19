import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pecnj0bby.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pecnj0bby"/>`,
		"fallback": "f7:chart-pie-fill",
	});
}

export default Component;
