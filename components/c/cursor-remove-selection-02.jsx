import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/lq5ffsa7e.css';
import '../../css/r/rpyybgb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="lq5ffsa7e"/><path class="rpyybgb7u"/></g>`,
		"fallback": "hugeicons:cursor-remove-selection-02",
	});
}

export default Component;
