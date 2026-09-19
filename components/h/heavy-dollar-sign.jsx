import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm_agbbjd.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm_agbbjd"/>`,
		"fallback": "dinkie-icons:heavy-dollar-sign",
	});
}

export default Component;
