import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqj5b0nts.css';
import '../../css/c/crpkpxbgp.css';
import '../../css/w/wh8wwcoah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zqj5b0nts"/><path class="crpkpxbgp"/><circle class="wh8wwcoah"/></g>`,
		"fallback": "lets-icons:credit-card-light",
	});
}

export default Component;
