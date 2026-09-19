import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cwwi-nlzx.css';
import '../../css/k/ktu7zj15p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cwwi-nlzx"/><path class="ktu7zj15p"/></g>`,
		"fallback": "glyphs:d-pad-duo",
	});
}

export default Component;
