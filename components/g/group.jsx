import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn436cvro.css';
import '../../css/n/nm85yq2ge.css';
import '../../css/u/u-r55tbuq.css';
import '../../css/v/vu27swb-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yn436cvro"/><path class="nm85yq2ge"/><rect class="u-r55tbuq"/><path class="vu27swb-g"/></g>`,
		"fallback": "andrsrxn:group",
	});
}

export default Component;
