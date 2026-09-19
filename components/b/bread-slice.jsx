import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj2_z7fcn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj2_z7fcn"/>`,
		"fallback": "fa7-solid:bread-slice",
	});
}

export default Component;
