import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zc4q38k8f.css';
import '../../css/m/mii5dhp2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zc4q38k8f"/><path class="mii5dhp2e"/></g>`,
		"fallback": "keyline-icons:code-two-tone",
	});
}

export default Component;
