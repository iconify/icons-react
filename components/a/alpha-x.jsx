import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0tdrhhdk.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0tdrhhdk"/>`,
		"fallback": "memory:alpha-x",
	});
}

export default Component;
