import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8av0dbrj.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8av0dbrj"/>`,
		"fallback": "memory:box-outer-light-dashed-right",
	});
}

export default Component;
