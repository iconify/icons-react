import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tzgmqab_p.css';
import '../../css/p/p_jae5bja.css';
import '../../css/t/tkqy6db1f.css';
import '../../css/l/lguuntben.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="tzgmqab_p"/><path class="p_jae5bja"/><path class="tkqy6db1f"/><path class="lguuntben"/></g>`,
		"fallback": "icon-park:clothes-pants",
	});
}

export default Component;
