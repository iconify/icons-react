import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d8zkzi3mu.css';
import '../../css/g/g6un4uvbw.css';
import '../../css/t/t218te2ox.css';
import '../../css/d/dy6f-b0he.css';
import '../../css/b/b-poshbij.css';
import '../../css/x/xqnjqczxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="d8zkzi3mu wm-deco"/><path class="g6un4uvbw wm-deco"/><path class="t218te2ox wm-deco"/><path class="dy6f-b0he wm-k"/><path class="b-poshbij wm-a"/><path class="wm-a xqnjqczxq"/></g>`,
		"fallback": "withicons:cup-soda-blueprint",
	});
}

export default Component;
