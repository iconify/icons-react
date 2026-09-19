import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gu9yjm2km.css';
import '../../css/c/cck4mqb4k.css';
import '../../css/i/id47-_bev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gu9yjm2km"/><path class="cck4mqb4k"/><path class="id47-_bev"/></g>`,
		"fallback": "hugeicons:image-add-01",
	});
}

export default Component;
