import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oinpcl48o.css';
import '../../css/z/z4n5h6nnc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="oinpcl48o"/><path class="z4n5h6nnc"/></g>`,
		"fallback": "si-glyph:battery-full",
	});
}

export default Component;
