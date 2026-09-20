import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbj_pyy4m.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbj_pyy4m"/>`,
		"fallback": "memory:bookmark",
	});
}

export default Component;
