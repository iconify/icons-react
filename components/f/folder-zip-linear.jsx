import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ywexq_b_p.css';
import '../../css/z/zj4hq-f3s.css';
import '../../css/f/frmem9b3z.css';
import '../../css/u/u820zrbfw.css';
import '../../css/x/xxn7u2bxb.css';
import '../../css/w/wojb86weh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ywexq_b_p"/><path class="zj4hq-f3s"/><path class="frmem9b3z"/><path class="u820zrbfw"/><path class="xxn7u2bxb"/><path class="wojb86weh"/></g>`,
		"fallback": "solar:folder-zip-linear",
	});
}

export default Component;
