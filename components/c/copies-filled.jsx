import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfz9rubqp.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfz9rubqp"/>`,
		"fallback": "dinkie-icons:copies-filled",
	});
}

export default Component;
