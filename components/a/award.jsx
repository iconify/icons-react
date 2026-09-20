import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/heii3gp1f.css';
import '../../css/c/cbeakqzpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="heii3gp1f"/><path class="cbeakqzpy"/></g>`,
		"fallback": "majesticons:award",
	});
}

export default Component;
