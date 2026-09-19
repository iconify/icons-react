import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvuy9acuj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvuy9acuj"/>`,
		"fallback": "f7:arrow-clockwise",
	});
}

export default Component;
