import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mwz9-fkga.css';
import '../../css/n/nba_jbchp.css';
import '../../css/t/t-bfk7ioi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><ellipse class="mwz9-fkga"/><path class="nba_jbchp"/><path class="t-bfk7ioi"/></g>`,
		"fallback": "hugeicons:database-export",
	});
}

export default Component;
