import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p65p1hbxh.css';
import '../../css/s/s2tis1bpw.css';
import '../../css/k/kbv0vccca.css';
import '../../css/q/qi6q6xbdk.css';
import '../../css/i/ix2yyfqqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p65p1hbxh"/><path class="s2tis1bpw"/><path class="kbv0vccca"/><path class="qi6q6xbdk"/><path class="ix2yyfqqg"/></g>`,
		"fallback": "solar:closet-2-line-duotone",
	});
}

export default Component;
