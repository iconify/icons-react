import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4qz2rsxs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4qz2rsxs"/>`,
		"fallback": "fa-solid:crutch",
	});
}

export default Component;
