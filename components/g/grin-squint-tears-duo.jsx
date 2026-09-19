import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgsf0f4kg.css';
import '../../css/b/b60xnhcqr.css';
import '../../css/n/ncm95bc2w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mgsf0f4kg"/><path class="b60xnhcqr"/><path class="ncm95bc2w"/></g>`,
		"fallback": "glyphs:grin-squint-tears-duo",
	});
}

export default Component;
