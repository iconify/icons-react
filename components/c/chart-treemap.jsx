import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlp2sxb1p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlp2sxb1p"/>`,
		"fallback": "carbon:chart-treemap",
	});
}

export default Component;
