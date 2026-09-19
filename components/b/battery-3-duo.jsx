import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qs8_8gyor.css';
import '../../css/w/w6f93ubgc.css';
import '../../css/z/zqsykkb_l.css';
import '../../css/d/d_p9auxlb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qs8_8gyor"/><path class="w6f93ubgc"/><path class="zqsykkb_l"/><path class="d_p9auxlb"/></g>`,
		"fallback": "glyphs:battery-3-duo",
	});
}

export default Component;
