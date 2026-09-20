import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/debshhs4b.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="debshhs4b"/>`,
		"fallback": "memory:box-light-vertical-horizontal-stipple-left-down-right",
	});
}

export default Component;
