import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv23k6bep.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv23k6bep"/>`,
		"fallback": "whh:closewindow",
	});
}

export default Component;
