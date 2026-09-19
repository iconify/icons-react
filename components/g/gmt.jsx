import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ulbgvyh1o.css';
import '../../css/m/md286fbip.css';
import '../../css/o/os1s_jbru.css';
import '../../css/q/q7o01wbuj.css';
import '../../css/m/ml_vzybbu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ulbgvyh1o"/><g class="md286fbip"><path class="os1s_jbru"/><path class="q7o01wbuj"/><path class="ml_vzybbu"/></g></g>`,
		"fallback": "cryptocurrency-color:gmt",
	});
}

export default Component;
