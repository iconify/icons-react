import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cm12kgb_m.css';
import '../../css/n/nxlffzbdb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cm12kgb_m"/><path class="nxlffzbdb"/></g>`,
		"fallback": "glyphs-poly:hurricane",
	});
}

export default Component;
