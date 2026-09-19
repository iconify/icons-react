import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/det8czbfr.css';
import '../../css/x/xz99htbfe.css';
import '../../css/z/z5ah-lkxn.css';
import '../../css/q/q3q2igs4y.css';
import '../../css/r/rchl7zb8t.css';
import '../../css/e/endbq-bnv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="det8czbfr"/><path class="xz99htbfe"/><path class="z5ah-lkxn"/><path class="q3q2igs4y"/><path class="rchl7zb8t"/><path class="endbq-bnv"/></g>`,
		"fallback": "fluent-emoji-flat:floppy-disk",
	});
}

export default Component;
