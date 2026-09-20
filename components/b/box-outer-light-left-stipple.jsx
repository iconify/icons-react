import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzqfxbb-k.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzqfxbb-k"/>`,
		"fallback": "memory:box-outer-light-left-stipple",
	});
}

export default Component;
