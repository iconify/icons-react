import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-q28tsmg.css';
import '../../css/y/yfd1ljmjm.css';
import '../../css/h/h94fm9bsp.css';
import '../../css/f/fytkmobqa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a-q28tsmg"/><path class="yfd1ljmjm"/><path class="h94fm9bsp"/><path class="fytkmobqa"/></g>`,
		"fallback": "glyphs:child-duo",
	});
}

export default Component;
