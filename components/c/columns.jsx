import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gq04wmfpy.css';
import '../../css/v/v2nrwktyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="gq04wmfpy"/><path class="v2nrwktyx"/></g>`,
		"fallback": "matita:columns",
	});
}

export default Component;
