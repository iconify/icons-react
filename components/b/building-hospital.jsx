import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w627__7gi.css';
import '../../css/t/tbl4q9bef.css';
import '../../css/o/oayreib_w.css';
import '../../css/o/ok_5a4u0a.css';
import '../../css/z/zwb-zgq8j.css';
import '../../css/a/a0x8awb1s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w627__7gi"/><path class="tbl4q9bef"/><path clip-rule="evenodd" class="oayreib_w"/><path class="ok_5a4u0a"/><path class="zwb-zgq8j"/><path clip-rule="evenodd" class="a0x8awb1s"/></g>`,
		"fallback": "glyphs-poly:building-hospital",
	});
}

export default Component;
