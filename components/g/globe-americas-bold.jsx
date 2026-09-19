import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tsnnjib_v.css';
import '../../css/m/mnr5v1b0o.css';
import '../../css/s/s-c-ff4lw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tsnnjib_v"/><path clip-rule="evenodd" class="mnr5v1b0o"/><path class="s-c-ff4lw"/></g>`,
		"fallback": "glyphs:globe-americas-bold",
	});
}

export default Component;
