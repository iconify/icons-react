import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8j3uq3cb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8j3uq3cb"/>`,
		"fallback": "fa6-solid:car",
	});
}

export default Component;
