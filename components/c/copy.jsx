import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nduvyz11x.css';
import '../../css/b/b8u9bcb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nduvyz11x"/><path class="b8u9bcb1v"/></g>`,
		"fallback": "mage:copy",
	});
}

export default Component;
