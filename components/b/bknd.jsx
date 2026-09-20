import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgdewob5q.css';
import '../../css/u/uuvbm1wfx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgdewob5q"/><path class="uuvbm1wfx"/>`,
		"fallback": "selfhst:bknd",
	});
}

export default Component;
