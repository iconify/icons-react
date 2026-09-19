import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m3wulz8oa.css';
import '../../css/d/d-_39cbuw.css';
import '../../css/i/iomhpyiaf.css';
import '../../css/s/svg0ombue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m3wulz8oa"/><path class="d-_39cbuw"/><path class="iomhpyiaf"/><path class="svg0ombue"/></g>`,
		"fallback": "hugeicons:diploma",
	});
}

export default Component;
