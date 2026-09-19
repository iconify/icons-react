import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jj7c0gb2i.css';
import '../../css/x/xbt0-v30p.css';
import '../../css/i/ix21ekp_l.css';
import '../../css/k/klxuwdbft.css';
import '../../css/c/cxj-9dstq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jj7c0gb2i"/><path class="xbt0-v30p"/><path class="ix21ekp_l"/><path class="klxuwdbft"/><path class="cxj-9dstq"/></g>`,
		"fallback": "fluent-emoji-flat:ear-with-hearing-aid-medium-light",
	});
}

export default Component;
