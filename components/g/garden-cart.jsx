import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rov4vz1hg.css';
import '../../css/w/w94ng0uks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rov4vz1hg"/><path class="w94ng0uks"/></g>`,
		"fallback": "tabler:garden-cart",
	});
}

export default Component;
