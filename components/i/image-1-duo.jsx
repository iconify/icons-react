import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vp4z6eb0x.css';
import '../../css/j/juio3krmk.css';
import '../../css/v/v6nf5ubiq.css';
import '../../css/u/uqjcukbov.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vp4z6eb0x"/><path class="juio3krmk"/><path class="v6nf5ubiq"/><path class="uqjcukbov"/></g>`,
		"fallback": "glyphs:image-1-duo",
	});
}

export default Component;
