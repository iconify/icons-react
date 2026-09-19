import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4b_gir2i.css';

const viewBox = {"width":339,"height":720};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4b_gir2i"/>`,
		"fallback": "ls:female",
	});
}

export default Component;
