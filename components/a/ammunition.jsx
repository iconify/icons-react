import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhp2b6bta.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhp2b6bta"/>`,
		"fallback": "at-icons:ammunition",
	});
}

export default Component;
