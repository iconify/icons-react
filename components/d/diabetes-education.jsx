import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_m6i_b2e.css';
import '../../css/x/x0zc1fb2j.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_m6i_b2e"/><path class="x0zc1fb2j"/>`,
		"fallback": "medical-icon:diabetes-education",
	});
}

export default Component;
