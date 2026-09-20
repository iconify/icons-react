import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d67uiab3g.css';
import '../../css/h/hbsfdvpyk.css';
import '../../css/h/htrp6gb9i.css';
import '../../css/g/guehvl8mh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d67uiab3g"/><path class="hbsfdvpyk"/><path class="htrp6gb9i"/><path class="guehvl8mh"/></g>`,
		"fallback": "streamline-ultimate:book-open-bookmark",
	});
}

export default Component;
