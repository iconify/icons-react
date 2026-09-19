import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfja0szta.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfja0szta"/>`,
		"fallback": "fa6-solid:face-laugh-beam",
	});
}

export default Component;
