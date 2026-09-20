import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wy8gwnb-q.css';
import '../../css/t/t50u13bhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wy8gwnb-q"/><path class="t50u13bhc"/></g>`,
		"fallback": "lucide:cuboid",
	});
}

export default Component;
