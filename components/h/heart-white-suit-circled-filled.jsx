import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hypj4bcrm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hypj4bcrm"/>`,
		"fallback": "dinkie-icons:heart-white-suit-circled-filled",
	});
}

export default Component;
