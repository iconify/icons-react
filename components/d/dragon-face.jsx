import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gatekicuz.css';
import '../../css/w/wvk8inb-o.css';
import '../../css/k/k7wn3zb-x.css';
import '../../css/g/g16mfq8li.css';
import '../../css/o/o-du1mojq.css';
import '../../css/r/r6bcli-xc.css';
import '../../css/z/z917udw8v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gatekicuz"/><path class="wvk8inb-o"/><path class="k7wn3zb-x"/><path class="g16mfq8li"/><path class="o-du1mojq"/><path class="r6bcli-xc"/><path class="z917udw8v"/></g>`,
		"fallback": "fluent-emoji-flat:dragon-face",
	});
}

export default Component;
