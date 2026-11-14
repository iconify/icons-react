import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dau6xu-gm.css';
import '../../css/i/ih0df-bqd.css';
import '../../css/i/i4uqfac5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="dau6xu-gm"/><rect class="ih0df-bqd"/><path class="i4uqfac5q"/></g>`,
		"fallback": "evicons:calibrated-meter",
	});
}

export default Component;
