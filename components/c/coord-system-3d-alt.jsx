import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx9bvc8de.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx9bvc8de"/>`,
		"fallback": "gis:coord-system-3d-alt",
	});
}

export default Component;
