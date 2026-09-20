import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcie1_bky.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcie1_bky"/>`,
		"fallback": "memory:format-text",
	});
}

export default Component;
