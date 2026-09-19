import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7fkjwj6c.css';
import '../../css/p/pwsprdbki.css';
import '../../css/w/wlr7lp3_b.css';
import '../../css/f/fgme9x7_s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h7fkjwj6c"/><path class="pwsprdbki"/><path class="wlr7lp3_b"/><path class="fgme9x7_s"/></g>`,
		"fallback": "fluent-emoji-flat:heart-with-arrow",
	});
}

export default Component;
