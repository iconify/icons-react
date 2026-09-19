import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dgv3dpb-u.css';
import '../../css/o/o6l7tkb7s.css';
import '../../css/u/um8386b8f.css';
import '../../css/l/lv8_-5sui.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dgv3dpb-u"/><path class="o6l7tkb7s"/><path class="um8386b8f"/><path class="lv8_-5sui"/></g>`,
		"fallback": "glyphs-poly:canoe-1",
	});
}

export default Component;
