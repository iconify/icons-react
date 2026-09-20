import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1d8ujg_b.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1d8ujg_b"/>`,
		"fallback": "memory:alpha-c",
	});
}

export default Component;
