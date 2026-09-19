import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1g5s_bga.css';
import '../../css/s/sosv7zf-y.css';
import '../../css/p/pk2ijs5sj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q1g5s_bga"/><path class="sosv7zf-y"/><path class="pk2ijs5sj"/></g>`,
		"fallback": "glyphs:inbox-duo",
	});
}

export default Component;
