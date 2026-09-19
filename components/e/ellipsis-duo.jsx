import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/smch_v_gi.css';
import '../../css/r/r66w1xbsj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="smch_v_gi"/><path class="r66w1xbsj"/></g>`,
		"fallback": "glyphs:ellipsis-duo",
	});
}

export default Component;
