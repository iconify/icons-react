import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbnrnkj8e.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbnrnkj8e"/>`,
		"fallback": "dinkie-icons:face-with-party-horn-and-party-hat",
	});
}

export default Component;
