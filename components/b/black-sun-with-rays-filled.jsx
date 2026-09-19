import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0097eb3k.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0097eb3k"/>`,
		"fallback": "dinkie-icons:black-sun-with-rays-filled",
	});
}

export default Component;
