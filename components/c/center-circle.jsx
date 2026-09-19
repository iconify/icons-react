import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3_0dkbiv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3_0dkbiv"/>`,
		"fallback": "carbon:center-circle",
	});
}

export default Component;
