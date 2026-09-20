import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xp8udau.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c5xp8udau"/>`,
		"fallback": "streamline:car-battery-charging-solid",
	});
}

export default Component;
