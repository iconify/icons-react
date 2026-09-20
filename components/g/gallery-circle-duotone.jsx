import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jago5qb8n.css';
import '../../css/z/zwb14lhyy.css';
import '../../css/d/daz1012ly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jago5qb8n"/><path class="zwb14lhyy"/><path clip-rule="evenodd" class="daz1012ly"/></g>`,
		"fallback": "reicon:gallery-circle-duotone",
	});
}

export default Component;
