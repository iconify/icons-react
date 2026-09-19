import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tgn41v_al.css';
import '../../css/a/a2usqjbsi.css';
import '../../css/s/speqp1bru.css';
import '../../css/r/rrqmlhbam.css';
import '../../css/a/a0wetfzra.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tgn41v_al"/><rect class="a2usqjbsi"/><path class="speqp1bru"/><rect class="rrqmlhbam"/><rect class="a0wetfzra"/></g>`,
		"fallback": "icon-park-outline:game-three",
	});
}

export default Component;
