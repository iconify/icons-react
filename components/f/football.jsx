import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u5pzwml9t.css';
import '../../css/i/iieh6_xpy.css';
import '../../css/i/i4uh5terb.css';
import '../../css/i/ijfpbushk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="u5pzwml9t wm-shadow"/><path class="iieh6_xpy wm-shadow"/><path class="i4uh5terb"/><path class="ijfpbushk"/></g>`,
		"fallback": "withicons-brutal:football",
	});
}

export default Component;
