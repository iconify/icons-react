import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t2qlxabla.css';
import '../../css/t/tjzpjrtvc.css';
import '../../css/l/lek275ekg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t2qlxabla"/><path class="tjzpjrtvc"/><path class="lek275ekg"/></g>`,
		"fallback": "glyphs:certificate-scroll-duo",
	});
}

export default Component;
