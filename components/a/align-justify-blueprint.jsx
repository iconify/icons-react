import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/atlcdwcje.css';
import '../../css/m/mhdr543mh.css';
import '../../css/l/liv-aobwc.css';
import '../../css/r/r6gbs3bix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="atlcdwcje wm-deco"/><path class="mhdr543mh wm-deco"/><path class="liv-aobwc"/><path class="r6gbs3bix"/></g>`,
		"fallback": "withicons:align-justify-blueprint",
	});
}

export default Component;
