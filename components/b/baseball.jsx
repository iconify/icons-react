import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nv-adpsgj.css';
import '../../css/b/b2aw-grhr.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nv-adpsgj"/><path class="b2aw-grhr"/></g>`,
		"fallback": "si-glyph:baseball",
	});
}

export default Component;
