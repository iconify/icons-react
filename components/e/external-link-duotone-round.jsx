import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dex3vgbjj.css';
import '../../css/e/e436j68ly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dex3vgbjj"/><path class="e436j68ly"/></g>`,
		"fallback": "coolicons:external-link-duotone-round",
	});
}

export default Component;
