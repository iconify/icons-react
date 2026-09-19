import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5_m7bc8r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5_m7bc8r"/>`,
		"fallback": "fluent-mdl2:hexagon",
	});
}

export default Component;
