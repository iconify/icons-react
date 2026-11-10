import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ehhm63b0r.css';
import '../../css/f/f-ad1tgwz.css';
import '../../css/j/j32hyhbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ehhm63b0r"/><path class="f-ad1tgwz"/><path class="j32hyhbya"/></g>`,
		"fallback": "andrsrxn:device-phone-rotate",
	});
}

export default Component;
