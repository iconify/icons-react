import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/som5wvb2y.css';
import '../../css/q/qj2dxhekm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="som5wvb2y"/><path class="qj2dxhekm"/>`,
		"fallback": "fxemoji:contact2",
	});
}

export default Component;
