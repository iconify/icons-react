import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z576df0bp.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z576df0bp"/>`,
		"fallback": "memory:box-light-vertical-horizontal-stipple-down-left",
	});
}

export default Component;
