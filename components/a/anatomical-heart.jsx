import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qk2wcw7qb.css';
import '../../css/f/fjbimbr2q.css';
import '../../css/z/zwbi_6b7i.css';
import '../../css/b/bdnbdybre.css';
import '../../css/e/e-4bbt5lc.css';
import '../../css/k/klzkheb7b.css';
import '../../css/w/wr2unbwzr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qk2wcw7qb"/><path class="fjbimbr2q"/><path class="zwbi_6b7i"/><path class="bdnbdybre"/><path class="e-4bbt5lc"/><path class="klzkheb7b"/><path class="wr2unbwzr"/></g>`,
		"fallback": "fluent-emoji-flat:anatomical-heart",
	});
}

export default Component;
