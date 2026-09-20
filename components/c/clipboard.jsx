import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0ds9_bxf.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0ds9_bxf"/>`,
		"fallback": "memory:clipboard",
	});
}

export default Component;
