import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gnsy7-bph.css';
import '../../css/d/d_-ywfb3l.css';
import '../../css/a/a-v8cwb1o.css';
import '../../css/q/qcjbof0wc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="gnsy7-bph wm-shadow"/><path class="d_-ywfb3l wm-shadow"/><path class="a-v8cwb1o"/><path class="qcjbof0wc"/></g>`,
		"fallback": "withicons-brutal:braces",
	});
}

export default Component;
