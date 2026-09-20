import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aja--_w3b.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aja--_w3b"/>`,
		"fallback": "memory:box-light-double-horizontal-light-down",
	});
}

export default Component;
