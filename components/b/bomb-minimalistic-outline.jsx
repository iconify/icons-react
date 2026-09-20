import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nb-40v-6s.css';
import '../../css/z/z2idmctjm.css';
import '../../css/l/l96efewzz.css';
import '../../css/l/l8lu4kgzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nb-40v-6s"/><path clip-rule="evenodd" class="z2idmctjm"/><path class="l96efewzz"/><path class="l8lu4kgzj"/></g>`,
		"fallback": "solar:bomb-minimalistic-outline",
	});
}

export default Component;
