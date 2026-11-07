import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/me44qacwj.css';
import '../../css/f/fpb37bc7d.css';
import '../../css/u/u2xezfy3o.css';
import '../../css/t/tpq_-dbwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="me44qacwj"/><path class="fpb37bc7d"/></g><path class="u2xezfy3o"/><path class="tpq_-dbwl"/>`,
		"fallback": "solar:cart-bold-duotone",
	});
}

export default Component;
