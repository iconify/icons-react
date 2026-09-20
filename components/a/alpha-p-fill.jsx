import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc2up6cvq.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc2up6cvq"/>`,
		"fallback": "memory:alpha-p-fill",
	});
}

export default Component;
