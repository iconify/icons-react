import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0age4b6p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0age4b6p"/>`,
		"fallback": "fa6-solid:face-grimace",
	});
}

export default Component;
