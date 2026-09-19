import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5it-si_z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5it-si_z"/>`,
		"fallback": "carbon:3rd-party-connected",
	});
}

export default Component;
