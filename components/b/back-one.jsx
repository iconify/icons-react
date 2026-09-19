import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/fmtu1-56g.css';
import '../../css/n/nl_dxabos.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="fmtu1-56g"/><path class="nl_dxabos"/></g>`,
		"fallback": "icon-park:back-one",
	});
}

export default Component;
