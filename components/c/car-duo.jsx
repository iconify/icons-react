import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q7nk9kbbt.css';
import '../../css/l/lu2cild_d.css';
import '../../css/h/hemvncbmx.css';
import '../../css/h/hqycppbku.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q7nk9kbbt"/><path class="lu2cild_d"/><path class="hemvncbmx"/><path class="hqycppbku"/></g>`,
		"fallback": "glyphs:car-duo",
	});
}

export default Component;
