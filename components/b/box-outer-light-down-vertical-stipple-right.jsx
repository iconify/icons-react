import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ral4gpppx.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ral4gpppx"/>`,
		"fallback": "memory:box-outer-light-down-vertical-stipple-right",
	});
}

export default Component;
