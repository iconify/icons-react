import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bg26ztbll.css';
import '../../css/i/if7b_fg1p.css';
import '../../css/v/vcufaui4b.css';
import '../../css/d/dm7s30bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bg26ztbll"/><path class="if7b_fg1p"/><path class="vcufaui4b"/><path class="dm7s30bzj"/></g>`,
		"fallback": "solar:git-branch-line-duotone",
	});
}

export default Component;
