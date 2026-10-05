import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/zhzuqrm_j.css';
import '../../css/k/kal8p47la.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="zhzuqrm_j"/><path class="kal8p47la"/></g>`,
		"fallback": "matita:chevrons-left",
	});
}

export default Component;
