import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qo7jx2b1g.css';
import '../../css/j/jjcophiqv.css';
import '../../css/c/c9itmrbal.css';
import '../../css/a/a9qtcg50u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qo7jx2b1g wm-shadow"/><path class="jjcophiqv wm-shadow"/><path class="c9itmrbal"/><path class="a9qtcg50u"/></g>`,
		"fallback": "withicons-brutal:feather",
	});
}

export default Component;
