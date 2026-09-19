import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s8nh1h0nh.css';
import '../../css/y/yup83ubvn.css';
import '../../css/w/w19nkbctm.css';
import '../../css/c/cm0wrmbin.css';
import '../../css/t/t1__4yurh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s8nh1h0nh"/><path class="yup83ubvn"/><path class="w19nkbctm"/><path class="cm0wrmbin"/><path class="t1__4yurh"/></g>`,
		"fallback": "fluent-emoji-flat:eagle",
	});
}

export default Component;
