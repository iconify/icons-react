import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x42wh-bdu.css';
import '../../css/t/ti2vfubmg.css';
import '../../css/s/s8egyjbkm.css';
import '../../css/z/zjt4gb9yw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x42wh-bdu"/><path class="ti2vfubmg"/><path class="s8egyjbkm"/><path class="zjt4gb9yw"/></g>`,
		"fallback": "solar:blocks-linear",
	});
}

export default Component;
