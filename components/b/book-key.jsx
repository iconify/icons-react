import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uqjsn9bct.css';
import '../../css/x/xryd7hl0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uqjsn9bct"/><path class="xryd7hl0q"/></g>`,
		"fallback": "hugeicons:book-key",
	});
}

export default Component;
