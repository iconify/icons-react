import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl3c13s6v.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl3c13s6v"/>`,
		"fallback": "memory:alpha-r-fill",
	});
}

export default Component;
