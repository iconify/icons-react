import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg9qp9bnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg9qp9bnj"/>`,
		"fallback": "ci:home-minus",
	});
}

export default Component;
