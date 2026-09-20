import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/snd7srb_o.css';
import '../../css/s/st2krab0w.css';
import '../../css/i/ie_b1ebhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="snd7srb_o"/><path class="st2krab0w"/><path class="ie_b1ebhj"/></g>`,
		"fallback": "pixelarticons:headphone",
	});
}

export default Component;
