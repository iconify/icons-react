import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvzbo5e7t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvzbo5e7t"/>`,
		"fallback": "carbon:basketball",
	});
}

export default Component;
