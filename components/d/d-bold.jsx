import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8yegab2c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8yegab2c"/>`,
		"fallback": "glyphs:d-bold",
	});
}

export default Component;
