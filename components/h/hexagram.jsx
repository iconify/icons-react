import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4vjmrkod.css';
import '../../css/y/y6w8si3bp.css';
import '../../css/u/ue8wzybsd.css';
import '../../css/u/u-mav5a4f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a4vjmrkod"/><path class="y6w8si3bp"/><path class="ue8wzybsd"/><path class="u-mav5a4f"/></g>`,
		"fallback": "streamline-color:hexagram",
	});
}

export default Component;
