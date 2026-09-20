import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bc-vfxj8z.css';
import '../../css/c/cvipy1f9h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bc-vfxj8z"/><path class="cvipy1f9h"/></g>`,
		"fallback": "streamline-flex-color:call-center-support-service",
	});
}

export default Component;
