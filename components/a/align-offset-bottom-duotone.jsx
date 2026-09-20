import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/e/e8lb8uc3g.css';
import '../../css/l/l12_cmb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="e8lb8uc3g"/><path class="l12_cmb5r"/></g>`,
		"fallback": "keyline-icons:align-offset-bottom-duotone",
	});
}

export default Component;
