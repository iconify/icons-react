import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svkb8dgje.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svkb8dgje"/>`,
		"fallback": "fa7-solid:arrows-down-to-line",
	});
}

export default Component;
