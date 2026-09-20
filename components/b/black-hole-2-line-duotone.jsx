import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/w/wt3ybdb3f.css';
import '../../css/b/bluprsbtv.css';
import '../../css/z/z1gx3x2aw.css';
import '../../css/t/tl598c2go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="h_tsn8bxt"/><path class="wt3ybdb3f"/><path class="bluprsbtv"/><path class="z1gx3x2aw"/><path class="tl598c2go"/></g>`,
		"fallback": "solar:black-hole-2-line-duotone",
	});
}

export default Component;
