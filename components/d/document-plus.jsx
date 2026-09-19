import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rxkgznbxu.css';
import '../../css/j/jth_zlg6y.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rxkgznbxu"/><path class="jth_zlg6y"/></g>`,
		"fallback": "si-glyph:document-plus",
	});
}

export default Component;
