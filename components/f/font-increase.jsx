import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3_3wsb1y.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3_3wsb1y"/>`,
		"fallback": "fluent-mdl2:font-increase",
	});
}

export default Component;
