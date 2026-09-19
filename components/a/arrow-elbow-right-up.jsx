import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro7j6o5qa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ro7j6o5qa"/>`,
		"fallback": "griddy-icons:arrow-elbow-right-up",
	});
}

export default Component;
