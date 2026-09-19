import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mk1ifno5b.css';
import '../../css/o/ownjpub9i.css';
import '../../css/k/kk9qjc8qr.css';
import '../../css/d/dztiqybdg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mk1ifno5b"/><path class="ownjpub9i"/><path class="kk9qjc8qr"/><path class="dztiqybdg"/></g>`,
		"fallback": "fluent-emoji-flat:face-holding-back-tears",
	});
}

export default Component;
