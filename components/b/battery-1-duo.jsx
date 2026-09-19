import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qs8_8gyor.css';
import '../../css/c/cwxewbz_z.css';
import '../../css/z/zqsykkb_l.css';
import '../../css/v/vsj6npbjq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qs8_8gyor"/><path class="cwxewbz_z"/><path class="zqsykkb_l"/><path class="vsj6npbjq"/></g>`,
		"fallback": "glyphs:battery-1-duo",
	});
}

export default Component;
