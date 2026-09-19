import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kuwd7bcos.css';
import '../../css/o/on2pvo0gv.css';
import '../../css/l/lx_zx5b2t.css';
import '../../css/p/pk5i1dr7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kuwd7bcos"/><path class="on2pvo0gv"/><path class="lx_zx5b2t"/><path class="pk5i1dr7d"/></g>`,
		"fallback": "iconoir:calendar-rotate",
	});
}

export default Component;
