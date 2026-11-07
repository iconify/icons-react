import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9h01f9wo.css';
import '../../css/o/oiqop8ebf.css';
import '../../css/b/bvct38blc.css';
import '../../css/a/abgizhdkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9h01f9wo"/><path class="oiqop8ebf"/><path class="bvct38blc"/><path class="abgizhdkn"/>`,
		"fallback": "solar:grid-2x2-close-bold",
	});
}

export default Component;
