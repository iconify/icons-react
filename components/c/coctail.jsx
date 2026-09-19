import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c6rglys6g.css';
import '../../css/c/c7ywoacuf.css';
import '../../css/u/uip_4ybxi.css';
import '../../css/m/m2nzsorih.css';
import '../../css/n/nqwui_bjj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c6rglys6g"/><path clip-rule="evenodd" class="c7ywoacuf"/><path class="uip_4ybxi"/><path class="m2nzsorih"/><path class="nqwui_bjj"/></g>`,
		"fallback": "pepicons:coctail",
	});
}

export default Component;
