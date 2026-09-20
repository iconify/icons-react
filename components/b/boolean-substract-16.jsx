import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3d_qp7ez.css';
import '../../css/m/ml-m03v8z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3d_qp7ez"/><path clip-rule="evenodd" class="ml-m03v8z"/>`,
		"fallback": "qlementine-icons:boolean-substract-16",
	});
}

export default Component;
