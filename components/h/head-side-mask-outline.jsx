import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dfw8yccuq.css';
import '../../css/y/yo558tb2l.css';
import '../../css/u/uvrn814xz.css';
import '../../css/c/cbpai7bsx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dfw8yccuq"/><path clip-rule="evenodd" class="yo558tb2l"/><path class="uvrn814xz"/><path clip-rule="evenodd" class="cbpai7bsx"/></g>`,
		"fallback": "glyphs:head-side-mask-outline",
	});
}

export default Component;
