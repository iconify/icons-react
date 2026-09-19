import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpf4vaap.css';
import '../../css/u/u83362buw.css';
import '../../css/y/yqth5dm5u.css';
import '../../css/m/mo2xx6bpc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="itpf4vaap"/><path class="u83362buw"/><path class="yqth5dm5u"/><path class="mo2xx6bpc"/></g>`,
		"fallback": "glyphs:images-1-duo",
	});
}

export default Component;
