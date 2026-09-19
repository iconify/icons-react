import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/ywydlnbdy.css';
import '../../css/i/icz65bb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ywydlnbdy"/><path class="icz65bb8t"/></g>`,
		"fallback": "hugeicons:high-heels-01",
	});
}

export default Component;
