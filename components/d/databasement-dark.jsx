import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_yxthbzw.css';
import '../../css/s/sll_zg-uo.css';
import '../../css/j/jhsistbnu.css';
import '../../css/u/u_c9_cbyw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGnuJMQSqw" x1="256" x2="256" y1="506.703" y2="5.298" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset=".5" class="g_yxthbzw"/><stop offset="1" class="sll_zg-uo"/></linearGradient><path fill="url(#SVGnuJMQSqw)" class="jhsistbnu"/><path class="u_c9_cbyw"/>`,
		"fallback": "selfhst:databasement-dark",
	});
}

export default Component;
