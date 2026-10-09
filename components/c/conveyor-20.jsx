import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k559q8bag.css';
import '../../css/z/zzchhccef.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k559q8bag"/><path class="zzchhccef"/>`,
		"fallback": "energy-icons:conveyor-20",
	});
}

export default Component;
