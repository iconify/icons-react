import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/o15o1h76j.css';
import '../../css/e/eyvi7fb3m.css';
import '../../css/h/hi00vw2ky.css';
import '../../css/t/tf15fuk-n.css';
import '../../css/h/ha231bb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="o15o1h76j wm-shadow"/><path class="eyvi7fb3m wm-shadow"/><path class="hi00vw2ky"/><path class="tf15fuk-n"/><path class="ha231bb7v"/></g>`,
		"fallback": "withicons-brutal:chart-funnel",
	});
}

export default Component;
