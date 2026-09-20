import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfmzkh.css';
import '../../css/g/g26hbu.css';
import '../../css/t/t5pxry.css';
import '../../css/h/hox66x.css';
import '../../css/u/u63-fz.css';
import '../../css/c/car43j.css';
import '../../css/k/ki7nel.css';
import '../../css/j/jlqdab.css';
import '../../css/i/iaydrt.css';
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
		"content": `<defs><mask id="SVGl6j9xbSe"><path class="cfmzkh g26hbu t5pxry"/><path class="hox66x t5pxry u63-fz"/><path class="car43j t5pxry u63-fz"/><path class="ki7nel t5pxry u63-fz"/><path class="g26hbu jlqdab jwvhdr"/><path class="iaydrt jwvhdr"/></mask></defs><path mask="url(#SVGl6j9xbSe)" class="botfzx"/>`,
		"fallback": "line-md:emoji-cry-filled",
	});
}

export default Component;
