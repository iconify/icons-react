import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbqaakbsr.css';
import '../../css/f/fys_hacng.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbqaakbsr"/><path class="fys_hacng"/>`,
		"fallback": "energy-icons:camera-20",
	});
}

export default Component;
