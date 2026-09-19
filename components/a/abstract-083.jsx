import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrcy5xw5o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrcy5xw5o"/>`,
		"fallback": "game-icons:abstract-083",
	});
}

export default Component;
