import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7pr7mgam.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7pr7mgam"/>`,
		"fallback": "dinkie-icons:black-cross-square-small-filled",
	});
}

export default Component;
