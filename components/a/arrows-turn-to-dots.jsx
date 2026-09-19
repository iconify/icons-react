import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/max5n0b3f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="max5n0b3f"/>`,
		"fallback": "fa6-solid:arrows-turn-to-dots",
	});
}

export default Component;
