import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp7mpy2fq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp7mpy2fq"/>`,
		"fallback": "pinhead:bishops-miter-with-latin-cross-beside-crozier-head",
	});
}

export default Component;
