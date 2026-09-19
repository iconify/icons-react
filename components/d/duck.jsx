import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dox58tamg.css';
import '../../css/w/w7xqf2bhc.css';
import '../../css/c/cm_b0kbjf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dox58tamg"/><path class="w7xqf2bhc"/><circle class="cm_b0kbjf"/></g>`,
		"fallback": "icon-park:duck",
	});
}

export default Component;
