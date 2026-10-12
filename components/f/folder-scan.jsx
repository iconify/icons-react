import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn436cvro.css';
import '../../css/d/d3bf4tbhb.css';
import '../../css/y/yk7yzghcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yn436cvro"/><path class="d3bf4tbhb"/><path class="yk7yzghcz"/></g>`,
		"fallback": "andrsrxn:folder-scan",
	});
}

export default Component;
