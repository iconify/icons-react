import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4ui9xrgk.css';
import '../../css/x/xqtn3zbcg.css';
import '../../css/g/gh7j6gbca.css';
import '../../css/q/qimmwqajk.css';
import '../../css/h/hsjbxm0ys.css';
import '../../css/t/toceatu_e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k4ui9xrgk"/><path class="xqtn3zbcg"/><path clip-rule="evenodd" class="gh7j6gbca"/><path class="qimmwqajk"/><path class="hsjbxm0ys"/><path clip-rule="evenodd" class="toceatu_e"/></g>`,
		"fallback": "streamline-kameleon-color:chair-4-pop",
	});
}

export default Component;
