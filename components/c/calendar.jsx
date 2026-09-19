import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6f6n8r8g.css';
import '../../css/f/fbq_esbeu.css';
import '../../css/i/ia4tklbjm.css';
import '../../css/s/sue_o3bci.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a6f6n8r8g"/><path class="fbq_esbeu"/><path class="ia4tklbjm"/><path class="sue_o3bci"/></g>`,
		"fallback": "glyphs-poly:calendar",
	});
}

export default Component;
