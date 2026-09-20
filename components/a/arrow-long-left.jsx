import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm8tcc-lz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm8tcc-lz"/>`,
		"fallback": "vaadin:arrow-long-left",
	});
}

export default Component;
