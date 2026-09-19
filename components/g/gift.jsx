import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujt3mubdv.css';
import '../../css/h/hr5zc9cra.css';
import '../../css/i/ipt0o-xhs.css';
import '../../css/q/q4mcc3b5a.css';
import '../../css/o/ozd8slbja.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ujt3mubdv"/><path clip-rule="evenodd" class="hr5zc9cra"/><path clip-rule="evenodd" class="ipt0o-xhs"/><path class="q4mcc3b5a"/><path clip-rule="evenodd" class="ozd8slbja"/></g>`,
		"fallback": "pepicons:gift",
	});
}

export default Component;
