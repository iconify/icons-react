import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n_tujq0gr.css';
import '../../css/d/doadfbpxb.css';
import '../../css/x/xzi0bebzl.css';
import '../../css/u/uyn9orb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n_tujq0gr"/><path class="doadfbpxb"/><path clip-rule="evenodd" class="xzi0bebzl"/><path class="uyn9orb3h"/></g>`,
		"fallback": "reicon:cat-duotone",
	});
}

export default Component;
