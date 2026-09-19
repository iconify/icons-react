import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/plpbm6b2f.css';
import '../../css/z/zabmlzbvr.css';
import '../../css/w/w9jf0vajj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="plpbm6b2f"/><path clip-rule="evenodd" class="zabmlzbvr"/><path class="w9jf0vajj"/></g>`,
		"fallback": "healthicons:gonorrhea-alt",
	});
}

export default Component;
