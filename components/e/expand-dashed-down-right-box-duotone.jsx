import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/ps2rzbltq.css';
import '../../css/d/d8ry_7lch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ps2rzbltq"/><path class="d8ry_7lch"/></g>`,
		"fallback": "keyline-icons:expand-dashed-down-right-box-duotone",
	});
}

export default Component;
