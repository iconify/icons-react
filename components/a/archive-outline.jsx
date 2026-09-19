import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vv07cqboy.css';
import '../../css/n/nwofm8dpb.css';
import '../../css/c/c_w4rabif.css';
import '../../css/u/uk_tlyd7k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vv07cqboy"/><path clip-rule="evenodd" class="nwofm8dpb"/><path class="c_w4rabif"/><path clip-rule="evenodd" class="uk_tlyd7k"/></g>`,
		"fallback": "glyphs:archive-outline",
	});
}

export default Component;
