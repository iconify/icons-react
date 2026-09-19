import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_9l21boq.css';
import '../../css/s/s_gc_96pc.css';
import '../../css/i/ifejj3b2h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j_9l21boq"/><path class="s_gc_96pc"/><path class="ifejj3b2h"/></g>`,
		"fallback": "fluent-emoji-flat:bone",
	});
}

export default Component;
