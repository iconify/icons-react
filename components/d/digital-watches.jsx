import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/u_fsd8m3a.css';
import '../../css/i/i-8h9wrll.css';
import '../../css/q/qc46jsbcx.css';
import '../../css/j/jz125kqyd.css';
import '../../css/p/p-wq87bjr.css';
import '../../css/z/zwwihtb5p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="u_fsd8m3a"/><path class="i-8h9wrll"/><path class="qc46jsbcx"/><path class="jz125kqyd"/><path class="p-wq87bjr"/><path class="zwwihtb5p"/></g>`,
		"fallback": "icon-park:digital-watches",
	});
}

export default Component;
