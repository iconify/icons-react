import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gt8pg8bwu.css';
import '../../css/n/nuqj8qcru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gt8pg8bwu"/><path class="nuqj8qcru"/></g>`,
		"fallback": "tabler:bell-ringing-2",
	});
}

export default Component;
