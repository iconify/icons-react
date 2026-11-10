import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ep9uhdcyk.css';
import '../../css/s/sm33x3bhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ep9uhdcyk"/><path class="sm33x3bhg"/></g>`,
		"fallback": "proicons:headphones",
	});
}

export default Component;
