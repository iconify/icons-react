import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk2uwtblc.css';
import '../../css/x/xh4f6t-8s.css';
import '../../css/v/vp0y6-bxh.css';
import '../../css/c/cq0hx26ww.css';
import '../../css/m/mmpgkbynn.css';
import '../../css/l/l0gf2gmoo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vk2uwtblc"/><path class="xh4f6t-8s"/><path class="vp0y6-bxh"/><path class="cq0hx26ww"/><path class="mmpgkbynn"/><path class="l0gf2gmoo"/></g>`,
		"fallback": "glyphs:globe-east-duo",
	});
}

export default Component;
