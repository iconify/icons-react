import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lesw936ac.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lesw936ac"/>`,
		"fallback": "dinkie-icons:cursing-face",
	});
}

export default Component;
