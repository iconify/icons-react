import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/deeudtm6r.css';
import '../../css/v/vlgqclbcf.css';
import '../../css/q/q-z0w2bpg.css';
import '../../css/y/yg572ybnd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="deeudtm6r"/><path class="vlgqclbcf"/><path class="q-z0w2bpg"/><path class="yg572ybnd"/></g>`,
		"fallback": "glyphs:heart-sparkles-duo",
	});
}

export default Component;
