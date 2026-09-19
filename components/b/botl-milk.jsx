import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/afz1rpb0s.css';
import '../../css/a/au4h7xemr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="afz1rpb0s"/><path class="au4h7xemr"/></g>`,
		"fallback": "si-glyph:botl-milk",
	});
}

export default Component;
