import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a87vfyb6f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a87vfyb6f"/>`,
		"fallback": "cib:conekta",
	});
}

export default Component;
