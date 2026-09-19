import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-ntwsbcy.css';
import '../../css/e/equ7vq30h.css';
import '../../css/r/rehh7gekh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-ntwsbcy"/><path class="equ7vq30h"/><path class="rehh7gekh"/></g>`,
		"fallback": "glyphs:grin-tongue-wink-duo",
	});
}

export default Component;
