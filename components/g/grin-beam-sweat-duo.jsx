import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xdza6nhsc.css';
import '../../css/h/h0nqr5iym.css';
import '../../css/d/dwazowq7g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xdza6nhsc"/><path class="h0nqr5iym"/><path class="dwazowq7g"/></g>`,
		"fallback": "glyphs:grin-beam-sweat-duo",
	});
}

export default Component;
