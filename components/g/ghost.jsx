import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af5y71jug.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af5y71jug"/>`,
		"fallback": "dinkie-icons:ghost",
	});
}

export default Component;
