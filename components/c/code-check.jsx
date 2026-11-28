import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byhf100bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byhf100bf"/>`,
		"fallback": "noviair-light:code-check",
	});
}

export default Component;
