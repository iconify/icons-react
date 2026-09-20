import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oocfn2e4j.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oocfn2e4j"/>`,
		"fallback": "memory:alpha-h-fill",
	});
}

export default Component;
