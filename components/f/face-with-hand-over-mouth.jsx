import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/n/nl499w6wm.css';
import '../../css/c/c9cdqccmn.css';
import '../../css/v/v5h9rabqo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="nl499w6wm"/><path class="c9cdqccmn"/><path class="v5h9rabqo"/></g>`,
		"fallback": "fluent-emoji-flat:face-with-hand-over-mouth",
	});
}

export default Component;
