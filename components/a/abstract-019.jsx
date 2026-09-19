import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atvqp4-uk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atvqp4-uk"/>`,
		"fallback": "game-icons:abstract-019",
	});
}

export default Component;
