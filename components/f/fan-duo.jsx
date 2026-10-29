import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tpg92ie3l.css';
import '../../css/b/bpo7kkb-y.css';
import '../../css/u/uxm70-bnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tpg92ie3l"/><path class="bpo7kkb-y wm-a"/><path class="uxm70-bnm"/></g>`,
		"fallback": "withicons:fan-duo",
	});
}

export default Component;
