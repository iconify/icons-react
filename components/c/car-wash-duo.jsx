import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ackxrjb_i.css';
import '../../css/x/xpw4hmbjx.css';
import '../../css/r/rmv9xr5fp.css';
import '../../css/b/bajpbybfh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ackxrjb_i"/><path class="xpw4hmbjx"/><path class="rmv9xr5fp"/><path class="bajpbybfh"/></g>`,
		"fallback": "glyphs:car-wash-duo",
	});
}

export default Component;
