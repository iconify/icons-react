import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z39rhmxzt.css';
import '../../css/g/gsepfxz2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z39rhmxzt"/><path class="gsepfxz2y"/></g>`,
		"fallback": "si:clipboard-alt-duotone",
	});
}

export default Component;
