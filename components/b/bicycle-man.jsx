import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m_zz76bfy.css';
import '../../css/m/mx92pe19y.css';
import '../../css/x/x3eovt8ab.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1 2)" class="n1lsf0bnc"><path class="m_zz76bfy"/><path class="mx92pe19y"/><ellipse class="x3eovt8ab"/></g>`,
		"fallback": "si-glyph:bicycle-man",
	});
}

export default Component;
