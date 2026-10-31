import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wtmdgbf5n.css';
import '../../css/b/b7rx3y3vg.css';
import '../../css/x/xe5_nnbmv.css';
import '../../css/u/u8leifbmi.css';
import '../../css/p/pjotn7bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow wtmdgbf5n"/><path class="b7rx3y3vg"/><path class="xe5_nnbmv"/><path class="u8leifbmi"/><path class="pjotn7bis"/></g>`,
		"fallback": "withicons-retro:captions",
	});
}

export default Component;
