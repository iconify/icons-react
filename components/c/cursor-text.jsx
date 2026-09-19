import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjg-x63et.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjg-x63et"/>`,
		"fallback": "dinkie-icons:cursor-text",
	});
}

export default Component;
