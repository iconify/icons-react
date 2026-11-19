import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zieeq_dab.css';
import '../../css/x/x9h61f2bu.css';
import '../../css/c/cokzfeb7g.css';
import '../../css/n/n8p1svj0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zieeq_dab"/><path class="x9h61f2bu"/><circle class="cokzfeb7g"/><path class="n8p1svj0v"/></g>`,
		"fallback": "andrsrxn:briefcase-clock",
	});
}

export default Component;
