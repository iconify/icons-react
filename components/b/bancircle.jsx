import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g85vmmbbx.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g85vmmbbx"/>`,
		"fallback": "whh:bancircle",
	});
}

export default Component;
