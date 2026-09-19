import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm5f1qe_p.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm5f1qe_p"/>`,
		"fallback": "fa7-brands:fort-awesome-alt",
	});
}

export default Component;
