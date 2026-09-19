import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rznww9boi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rznww9boi"/>`,
		"fallback": "file-icons:asymptote",
	});
}

export default Component;
