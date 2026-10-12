import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ik4rv3xqf.css';
import '../../css/f/fbpsmhboz.css';
import '../../css/o/one7onbdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ik4rv3xqf"/><path class="fbpsmhboz"/><path class="one7onbdt"/></g>`,
		"fallback": "andrsrxn:decimals-less",
	});
}

export default Component;
