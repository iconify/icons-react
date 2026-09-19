import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbygc4bqp.css';
import '../../css/o/obs24acsp.css';
import '../../css/o/o_uhbsp1t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xbygc4bqp"/><path class="obs24acsp"/><ellipse transform="rotate(30 23.477 12.594)" class="o_uhbsp1t"/></g>`,
		"fallback": "fluent-emoji-flat:brown-heart",
	});
}

export default Component;
