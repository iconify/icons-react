import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bosfi5b8i.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bosfi5b8i"/>`,
		"fallback": "memory:alpha-n-fill",
	});
}

export default Component;
