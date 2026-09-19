import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7ddr5vqy.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7ddr5vqy"/>`,
		"fallback": "dinkie-icons:black-sun-with-rays-small-filled",
	});
}

export default Component;
