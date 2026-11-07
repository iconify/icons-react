import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/if7b_fg1p.css';
import '../../css/w/w6v4566pk.css';
import '../../css/v/vcufaui4b.css';
import '../../css/d/dm7s30bzj.css';
import '../../css/w/w77j1_bab.css';
import '../../css/z/zuwpoxb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="if7b_fg1p"/><path class="w6v4566pk"/><path class="vcufaui4b"/><path class="dm7s30bzj"/><path class="w77j1_bab"/><path class="zuwpoxb1z"/></g>`,
		"fallback": "solar:git-branch-broken",
	});
}

export default Component;
