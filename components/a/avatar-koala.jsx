import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w72fwubfl.css';
import '../../css/p/pwcfd4buv.css';
import '../../css/p/pjf9atbzq.css';
import '../../css/h/hlwthdxqn.css';
import '../../css/o/o47crebme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="w72fwubfl wm-shadow"/><path class="pwcfd4buv"/><path class="pjf9atbzq"/><path class="hlwthdxqn"/><path class="o47crebme"/></g>`,
		"fallback": "withicons-retro:avatar-koala",
	});
}

export default Component;
