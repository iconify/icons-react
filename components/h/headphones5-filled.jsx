import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zjlx0k8it.css';
import '../../css/s/sr4fnxk3f.css';
import '../../css/m/mo7m3ob5s.css';
import '../../css/c/cucx9cczf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zjlx0k8it"/><path class="sr4fnxk3f"/><path class="mo7m3ob5s"/><path class="cucx9cczf"/></g>`,
		"fallback": "reicon:headphones5-filled",
	});
}

export default Component;
