import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xldsxab3g.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xldsxab3g"/>`,
		"fallback": "fluent-mdl2:drop-shape",
	});
}

export default Component;
