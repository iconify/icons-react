import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/u/uhuv4m6tn.css';
import '../../css/b/bbtmxy_bd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="uhuv4m6tn"/><path class="bbtmxy_bd"/>`,
		"fallback": "energy-icons:face-cool-20-bold",
	});
}

export default Component;
