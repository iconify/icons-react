import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/ww1487byk.css';
import '../../css/b/b6cjujs6z.css';
import '../../css/i/i2n_j2bus.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ww1487byk"/><path class="b6cjujs6z"/><path class="i2n_j2bus"/></g>`,
		"fallback": "glyphs-poly:baseball-bat",
	});
}

export default Component;
