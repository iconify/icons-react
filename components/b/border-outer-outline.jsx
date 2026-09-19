import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7mn_xgnv.css';
import '../../css/o/oojk4pbmj.css';
import '../../css/y/ytntd_8jh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="h7mn_xgnv"><path class="oojk4pbmj"/><path class="ytntd_8jh"/></g>`,
		"fallback": "glyphs:border-outer-outline",
	});
}

export default Component;
