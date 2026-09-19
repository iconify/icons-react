import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wahv08b6n.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wahv08b6n"/>`,
		"fallback": "dinkie-icons:figma",
	});
}

export default Component;
