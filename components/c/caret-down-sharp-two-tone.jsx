import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k384k8b7z.css';
import '../../css/g/gxhti5bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="k384k8b7z"/><path class="gxhti5bxu"/></g>`,
		"fallback": "keyline-icons:caret-down-sharp-two-tone",
	});
}

export default Component;
