import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0i85cboo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0i85cboo"/>`,
		"fallback": "carbon:edt-loop",
	});
}

export default Component;
