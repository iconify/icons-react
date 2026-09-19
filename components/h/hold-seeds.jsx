import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/j/jnakdhbal.css';
import '../../css/r/rf0doac_z.css';
import '../../css/a/al3ns2dam.css';
import '../../css/s/s2z3l6b3b.css';
import '../../css/t/t1taycc0q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="jnakdhbal"/><path class="rf0doac_z"/><circle class="al3ns2dam"/><circle class="s2z3l6b3b"/><circle class="t1taycc0q"/></g>`,
		"fallback": "icon-park:hold-seeds",
	});
}

export default Component;
