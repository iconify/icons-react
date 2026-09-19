import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i37lj7btr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i37lj7btr"/>`,
		"fallback": "fa-solid:arrow-alt-circle-down",
	});
}

export default Component;
