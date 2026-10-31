import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/b8s5p2bbo.css';
import '../../css/f/fanskmukn.css';
import '../../css/e/e2o-46l3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="b8s5p2bbo wm-shadow"/><path class="fanskmukn wm-shadow"/><path class="e2o-46l3v"/></g>`,
		"fallback": "withicons-brutal:chart-gantt",
	});
}

export default Component;
