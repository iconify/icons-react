import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vaz1v--_q.css';
import '../../css/g/g1z6bz-ab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="vaz1v--_q"/><path class="g1z6bz-ab"/></g>`,
		"fallback": "feather:award",
	});
}

export default Component;
