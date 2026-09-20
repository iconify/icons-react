import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hiyh67b3s.css';
import '../../css/p/pq9yc-7-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hiyh67b3s"/><path class="pq9yc-7-i"/></g>`,
		"fallback": "tabler:battery-eco",
	});
}

export default Component;
