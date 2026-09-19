import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mn_k5hbmp.css';
import '../../css/z/z-z89cbqm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="mn_k5hbmp"/><path class="z-z89cbqm"/></g>`,
		"fallback": "icon-park:click-tap-two",
	});
}

export default Component;
