import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptg01b2nr.css';
import '../../css/a/a5l7l5b-b.css';
import '../../css/k/kv6hvkh0l.css';
import '../../css/z/z_zma3vub.css';
import '../../css/e/e1cntybqg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ptg01b2nr"/><path class="a5l7l5b-b"/><path class="kv6hvkh0l"/><path class="z_zma3vub"/><path class="e1cntybqg"/></g>`,
		"fallback": "fluent-emoji-flat:ear-of-corn",
	});
}

export default Component;
