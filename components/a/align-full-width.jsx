import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6_s7g3ed.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6_s7g3ed"/>`,
		"fallback": "dashicons:align-full-width",
	});
}

export default Component;
