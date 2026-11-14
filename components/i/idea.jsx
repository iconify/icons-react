import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/evo6_f59a.css';
import '../../css/h/hqe145bzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="evo6_f59a"/><path class="hqe145bzg"/></g>`,
		"fallback": "hugeicons:idea",
	});
}

export default Component;
