import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/if7b_fg1p.css';
import '../../css/o/oreif5bgc.css';
import '../../css/v/vcufaui4b.css';
import '../../css/d/dm7s30bzj.css';
import '../../css/v/v4x7pebrs.css';
import '../../css/o/oohs4t6bq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="if7b_fg1p"/><path class="oreif5bgc"/><path class="vcufaui4b"/><path class="dm7s30bzj"/><path class="v4x7pebrs"/><path class="oohs4t6bq"/></g>`,
		"fallback": "solar:git-branch-broken",
	});
}

export default Component;
