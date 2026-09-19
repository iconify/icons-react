import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/meo0i6kkk.css';
import '../../css/x/xsg7zu72j.css';
import '../../css/h/hsytook5g.css';
import '../../css/v/vfc_tmbcn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="meo0i6kkk"/><path clip-rule="evenodd" class="xsg7zu72j"/><path class="hsytook5g"/><path clip-rule="evenodd" class="vfc_tmbcn"/></g>`,
		"fallback": "healthicons:icd-112x-outline",
	});
}

export default Component;
