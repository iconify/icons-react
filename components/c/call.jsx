import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbz4yzbkb.css';
import '../../css/m/md286fbip.css';
import '../../css/l/lky8rsbsc.css';
import '../../css/m/m55nhz01q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qbz4yzbkb"/><g class="md286fbip"><path class="lky8rsbsc"/><path class="m55nhz01q"/></g></g>`,
		"fallback": "cryptocurrency-color:call",
	});
}

export default Component;
