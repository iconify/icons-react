import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml8l45bnd.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml8l45bnd"/>`,
		"fallback": "fa6-solid:bottle-water",
	});
}

export default Component;
