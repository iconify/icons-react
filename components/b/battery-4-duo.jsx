import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qs8_8gyor.css';
import '../../css/o/oluiti4kl.css';
import '../../css/z/zqsykkb_l.css';
import '../../css/y/yz4e_lbwb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qs8_8gyor"/><path class="oluiti4kl"/><path class="zqsykkb_l"/><path class="yz4e_lbwb"/></g>`,
		"fallback": "glyphs:battery-4-duo",
	});
}

export default Component;
