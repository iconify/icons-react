import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pmzqopkvq.css';
import '../../css/o/o4gk2is8h.css';
import '../../css/c/cumbvnb-s.css';
import '../../css/y/yjkv3pplf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pmzqopkvq"/><path class="o4gk2is8h"/><path class="cumbvnb-s"/><path class="yjkv3pplf"/></g>`,
		"fallback": "glyphs:arrows-exchange-bold",
	});
}

export default Component;
