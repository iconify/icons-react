import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i_dcv8bbe.css';
import '../../css/r/rf9tq_bna.css';
import '../../css/i/i29n7n-0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i_dcv8bbe"/><path class="rf9tq_bna"/><path class="i29n7n-0y"/></g>`,
		"fallback": "iconoir:atom",
	});
}

export default Component;
