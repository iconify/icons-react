import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ghljoyrdf.css';
import '../../css/h/hi7w-bbfn.css';
import '../../css/d/dwatv0b0q.css';
import '../../css/w/wvv76zb_y.css';
import '../../css/p/pp75igbeh.css';
import '../../css/a/asy_mji6w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ghljoyrdf"/><path class="hi7w-bbfn"/><path clip-rule="evenodd" class="dwatv0b0q"/><path clip-rule="evenodd" class="wvv76zb_y"/><path class="pp75igbeh"/><path clip-rule="evenodd" class="asy_mji6w"/></g>`,
		"fallback": "glyphs:alarm-plus-outline",
	});
}

export default Component;
