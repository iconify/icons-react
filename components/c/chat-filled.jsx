import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so5a6b.css';
import '../../css/t/t5pxry.css';
import '../../css/u/u63-fz.css';
import '../../css/y/ycqeef.css';
import '../../css/j/jrczgc.css';
import '../../css/u/uv8njc.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-70.css';
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
		"content": `<defs><mask id="SVGWCBVgbBH"><path class="so5a6b t5pxry"/><path class="t5pxry u63-fz ycqeef"/><path class="jrczgc t5pxry u63-fz"/><path class="t5pxry u63-fz uv8njc"/></mask></defs><path mask="url(#SVGWCBVgbBH)" class="botfzx"/>`,
		"fallback": "line-md:chat-filled",
	});
}

export default Component;
