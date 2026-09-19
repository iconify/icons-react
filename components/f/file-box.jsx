import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pjyhppbyk.css';
import '../../css/z/zejy9ubbf.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pjyhppbyk"/><path class="zejy9ubbf"/></g>`,
		"fallback": "si-glyph:file-box",
	});
}

export default Component;
