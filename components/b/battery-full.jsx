import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nv2wnob8f.css';
import '../../css/d/d55c2pbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nv2wnob8f"/><path class="d55c2pbyz"/></g>`,
		"fallback": "humbleicons:battery-full",
	});
}

export default Component;
