import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wtmdgbf5n.css';
import '../../css/x/x1ab9do9c.css';
import '../../css/j/jnu8mcs8e.css';
import '../../css/j/jsyq7453v.css';
import '../../css/t/t18i-qb3n.css';
import '../../css/v/v_g8odbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow wtmdgbf5n"/><path class="x1ab9do9c"/><path class="jnu8mcs8e"/><path class="jsyq7453v"/><path class="t18i-qb3n"/><path class="v_g8odbby"/></g>`,
		"fallback": "withicons-retro:id-card",
	});
}

export default Component;
