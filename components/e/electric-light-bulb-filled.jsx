import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gek8pcbul.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gek8pcbul"/>`,
		"fallback": "dinkie-icons:electric-light-bulb-filled",
	});
}

export default Component;
