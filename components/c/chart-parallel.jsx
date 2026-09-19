import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx5kj2b5n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx5kj2b5n"/>`,
		"fallback": "carbon:chart-parallel",
	});
}

export default Component;
