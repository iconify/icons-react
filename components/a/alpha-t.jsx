import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd5n0mazb.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd5n0mazb"/>`,
		"fallback": "memory:alpha-t",
	});
}

export default Component;
