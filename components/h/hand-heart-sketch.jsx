import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aajok45mv.css';
import '../../css/l/le5q5c42g.css';
import '../../css/m/mhb-ipbjs.css';
import '../../css/d/dgk7tnbpd.css';
import '../../css/c/cqpvlqbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="aajok45mv"/><path class="le5q5c42g wm-k"/><path class="mhb-ipbjs wm-a"/><path class="dgk7tnbpd wm-k"/><path class="cqpvlqbjo wm-a"/></g>`,
		"fallback": "withicons:hand-heart-sketch",
	});
}

export default Component;
