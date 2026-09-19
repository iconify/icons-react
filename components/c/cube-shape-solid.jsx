import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1m-wck-m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1m-wck-m"/>`,
		"fallback": "fluent-mdl2:cube-shape-solid",
	});
}

export default Component;
