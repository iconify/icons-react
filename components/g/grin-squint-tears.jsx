import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rnf5o38_t.css';
import '../../css/g/gkw1zgb3s.css';
import '../../css/l/l1y_x7bjg.css';
import '../../css/h/h61_l9m8l.css';
import '../../css/j/j2pzxqiat.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rnf5o38_t"/><path clip-rule="evenodd" class="gkw1zgb3s"/><path class="l1y_x7bjg"/><path class="h61_l9m8l"/><path class="j2pzxqiat"/></g>`,
		"fallback": "glyphs-poly:grin-squint-tears",
	});
}

export default Component;
