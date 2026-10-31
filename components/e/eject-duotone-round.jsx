import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cj_b8sw6h.css';
import '../../css/e/eiwlm4b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cj_b8sw6h"/><path class="eiwlm4b6z"/></g>`,
		"fallback": "coolicons:eject-duotone-round",
	});
}

export default Component;
