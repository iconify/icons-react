import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzlor2bis.css';
import '../../css/t/trnyoum9w.css';
import '../../css/e/e3rxiqbbg.css';
import '../../css/h/h_3kmvbkb.css';
import '../../css/d/dp11gvrnz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rzlor2bis"/><path class="trnyoum9w"/><path clip-rule="evenodd" class="e3rxiqbbg"/><path class="h_3kmvbkb"/><path class="dp11gvrnz"/></g>`,
		"fallback": "glyphs:globe-stand-middle-duo",
	});
}

export default Component;
