import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnlsoq3zr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnlsoq3zr"/>`,
		"fallback": "fluent-mdl2:circle-half-full",
	});
}

export default Component;
