import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lcg626bqg.css';
import '../../css/i/i7_qlrbtz.css';
import '../../css/m/miqf99bxq.css';
import '../../css/r/rmxdniboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lcg626bqg"/><path clip-rule="evenodd" class="i7_qlrbtz"/><path class="miqf99bxq"/><path clip-rule="evenodd" class="rmxdniboc"/></g>`,
		"fallback": "tdesign:chat-heart",
	});
}

export default Component;
