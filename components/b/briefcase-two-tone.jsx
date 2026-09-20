import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g7fhqy1lz.css';
import '../../css/z/zh0bxlbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g7fhqy1lz"/><path class="zh0bxlbcx"/></g>`,
		"fallback": "keyline-icons:briefcase-two-tone",
	});
}

export default Component;
