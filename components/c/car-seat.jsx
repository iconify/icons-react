import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbp3x8bfd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbp3x8bfd"/>`,
		"fallback": "game-icons:car-seat",
	});
}

export default Component;
