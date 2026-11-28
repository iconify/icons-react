import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ced2b_b6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ced2b_b6r"/>`,
		"fallback": "noviair-light:folder-minus",
	});
}

export default Component;
