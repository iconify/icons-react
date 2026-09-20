import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aoru-1c7c.css';
import '../../css/x/xq1bxcbka.css';
import '../../css/z/z4_iucblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aoru-1c7c"/><path class="xq1bxcbka"/><path clip-rule="evenodd" class="z4_iucblp"/></g>`,
		"fallback": "reicon:home-wifi3",
	});
}

export default Component;
