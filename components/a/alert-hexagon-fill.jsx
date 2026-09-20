import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_r4d6d1t.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_r4d6d1t"/>`,
		"fallback": "memory:alert-hexagon-fill",
	});
}

export default Component;
