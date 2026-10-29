import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ogtxsja6z.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/h/hs0-4wbbr.css';
import '../../css/h/hmnowib5p.css';
import '../../css/m/mqpl4gryu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ogtxsja6z"/><path class="d3y9mw6db"/><path class="hs0-4wbbr wm-a"/><path class="hmnowib5p wm-a"/><path class="mqpl4gryu wm-a"/></g>`,
		"fallback": "withicons:avatar-man-turban",
	});
}

export default Component;
