import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz_aku.css';
import '../../css/t/t5pxry.css';
import '../../css/h/hox66x.css';
import '../../css/u/u63-fz.css';
import '../../css/l/lzypnw.css';
import '../../css/w/wlbw1x.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbQSMc4xm"><path class="pz_aku t5pxry"/><path class="hox66x t5pxry u63-fz"/><path class="lzypnw t5pxry u63-fz"/><path class="t5pxry u63-fz wlbw1x"/></mask></defs><path mask="url(#SVGbQSMc4xm)" class="botfzx"/>`,
		"fallback": "line-md:emoji-smile-wink-filled",
	});
}

export default Component;
