import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wks9rvbdz.css';
import '../../css/w/w1piddb9w.css';
import '../../css/n/nclc4jhsi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wks9rvbdz"/><path class="w1piddb9w"/><path class="nclc4jhsi"/></g>`,
		"fallback": "glyphs-poly:campfire",
	});
}

export default Component;
