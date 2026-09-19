import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n7f7ozbam.css';
import '../../css/s/sg8-s5bcj.css';
import '../../css/f/f4auaccww.css';
import '../../css/w/wg-9_kb5r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n7f7ozbam"/><path clip-rule="evenodd" class="sg8-s5bcj"/><path class="f4auaccww"/><path clip-rule="evenodd" class="wg-9_kb5r"/></g>`,
		"fallback": "glyphs:grin-tongue-squint-outline",
	});
}

export default Component;
