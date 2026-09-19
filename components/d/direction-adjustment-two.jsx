import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dxs9mlbnx.css';
import '../../css/x/x1obzgi-q.css';
import '../../css/k/kyxqs86cs.css';
import '../../css/t/tcb1lfbls.css';
import '../../css/e/eorz1_brh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="dxs9mlbnx"/><path class="x1obzgi-q"/><path class="kyxqs86cs"/><path class="tcb1lfbls"/><circle class="eorz1_brh"/></g>`,
		"fallback": "icon-park:direction-adjustment-two",
	});
}

export default Component;
