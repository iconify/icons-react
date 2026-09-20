import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j5uat5jqr.css';
import '../../css/o/ov2miw2og.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j5uat5jqr"/><path class="ov2miw2og"/></g>`,
		"fallback": "mage:contact-book",
	});
}

export default Component;
