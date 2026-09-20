import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l6ar3parr.css';
import '../../css/b/bq84y5bti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l6ar3parr"/><path class="bq84y5bti"/></g>`,
		"fallback": "solar:arrow-left-up-line-duotone",
	});
}

export default Component;
