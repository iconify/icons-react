import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6fkvxgfa.css';
import '../../css/u/uf413fb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b6fkvxgfa"/><path class="uf413fb_z"/></g>`,
		"fallback": "coolicons:file-minus-duotone-round",
	});
}

export default Component;
