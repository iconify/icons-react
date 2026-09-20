import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmhsw6grh.css';

const viewBox = {"width":256,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmhsw6grh"/>`,
		"fallback": "thesvg-color:framer-dark",
	});
}

export default Component;
