import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ioovyo8cb.css';
import '../../css/e/ejsn6_b0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ioovyo8cb"/><path class="ejsn6_b0v"/></g>`,
		"fallback": "hugeicons:flask-conical",
	});
}

export default Component;
