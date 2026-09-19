import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngmlmh1fm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngmlmh1fm"/>`,
		"fallback": "fa-solid:blender",
	});
}

export default Component;
