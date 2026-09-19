import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kl2py6bsc.css';
import '../../css/e/e3wgdxbsg.css';
import '../../css/a/avjgxm8yh.css';
import '../../css/i/io3-j9bqa.css';
import '../../css/u/uu-ktdb4s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kl2py6bsc"/><path class="e3wgdxbsg"/><path class="avjgxm8yh"/><path class="io3-j9bqa"/><path clip-rule="evenodd" class="uu-ktdb4s"/></g>`,
		"fallback": "glyphs-poly:electric-scooter",
	});
}

export default Component;
