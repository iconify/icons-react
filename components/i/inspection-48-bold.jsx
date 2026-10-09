import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk47rq3ua.css';
import '../../css/k/k-q56dbbd.css';
import '../../css/c/crhvqybvb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk47rq3ua"/><path class="k-q56dbbd"/><path class="crhvqybvb"/>`,
		"fallback": "energy-icons:inspection-48-bold",
	});
}

export default Component;
