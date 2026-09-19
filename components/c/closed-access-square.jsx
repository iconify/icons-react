import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l27e00btt.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l27e00btt"/>`,
		"fallback": "academicons:closed-access-square",
	});
}

export default Component;
