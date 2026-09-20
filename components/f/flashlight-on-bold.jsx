import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wethgabtb.css';
import '../../css/a/a-e6jqnaw.css';
import '../../css/a/au-9owkmd.css';
import '../../css/l/l8_a_4bpb.css';
import '../../css/x/x6r1cxbju.css';
import '../../css/l/lpvw17bmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wethgabtb"/><path class="a-e6jqnaw"/><path class="au-9owkmd"/><path class="l8_a_4bpb"/><path class="x6r1cxbju"/><path clip-rule="evenodd" class="lpvw17bmw"/></g>`,
		"fallback": "solar:flashlight-on-bold",
	});
}

export default Component;
