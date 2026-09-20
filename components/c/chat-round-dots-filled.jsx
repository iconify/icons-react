import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g26hbu.css';
import '../../css/t/t5pxry.css';
import '../../css/z/z70o0j.css';
import '../../css/b/b9qm4w.css';
import '../../css/h/h15w-v.css';
import '../../css/u/u63-fz.css';
import '../../css/k/ko-nhy.css';
import '../../css/y/yr8c4b.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-ssqjbr.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgnAugeel"><path class="g26hbu t5pxry z70o0j"/><path class="b9qm4w g26hbu"/><path class="h15w-v t5pxry u63-fz"/><path class="ko-nhy t5pxry u63-fz"/><path class="t5pxry u63-fz yr8c4b"/></mask></defs><path mask="url(#SVGgnAugeel)" class="botfzx"/>`,
		"fallback": "line-md:chat-round-dots-filled",
	});
}

export default Component;
