import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q0w7vmnch.css';
import '../../css/b/b5woipvdm.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="q0w7vmnch"/><path class="b5woipvdm"/></g>`,
		"fallback": "si-glyph:briefcase",
	});
}

export default Component;
