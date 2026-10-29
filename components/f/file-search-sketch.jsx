import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c085-k6yx.css';
import '../../css/b/bnocajebg.css';
import '../../css/u/u4cstkbgk.css';
import '../../css/o/oy1u0bcyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c085-k6yx"/><path class="bnocajebg wm-a"/><path class="u4cstkbgk wm-k"/><path class="oy1u0bcyu wm-a"/></g>`,
		"fallback": "withicons:file-search-sketch",
	});
}

export default Component;
