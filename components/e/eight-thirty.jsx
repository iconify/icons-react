import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qls5yob2g.css';
import '../../css/w/wmqawrbxw.css';
import '../../css/c/c6fqf6bol.css';
import '../../css/j/j-10gwb6n.css';
import '../../css/p/p_03qcbda.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qls5yob2g"/><path clip-rule="evenodd" class="wmqawrbxw"/><path clip-rule="evenodd" class="c6fqf6bol"/><path clip-rule="evenodd" class="j-10gwb6n"/><path class="p_03qcbda"/></g>`,
		"fallback": "fluent-emoji-flat:eight-thirty",
	});
}

export default Component;
