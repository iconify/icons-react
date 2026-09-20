import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0gygpb-r.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0gygpb-r"/>`,
		"fallback": "memory:box-light-fold-up-right",
	});
}

export default Component;
