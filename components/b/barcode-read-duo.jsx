import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hv74s5bof.css';
import '../../css/b/b4r8x-bpj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hv74s5bof"/><path class="b4r8x-bpj"/></g>`,
		"fallback": "glyphs:barcode-read-duo",
	});
}

export default Component;
