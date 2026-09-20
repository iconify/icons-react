import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btne34iwk.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btne34iwk"/>`,
		"fallback": "memory:box-light-vertical-horizontal-stipple-down-right",
	});
}

export default Component;
