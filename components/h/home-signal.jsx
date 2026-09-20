import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kku0t8bev.css';
import '../../css/g/g-z7sqe3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kku0t8bev"/><path class="g-z7sqe3n"/></g>`,
		"fallback": "tabler:home-signal",
	});
}

export default Component;
