import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ar3461yhb.css';
import '../../css/l/lw3fvdb0h.css';
import '../../css/m/m27mn3bit.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ar3461yhb"/><path class="lw3fvdb0h"/><path class="m27mn3bit"/></g>`,
		"fallback": "glyphs-poly:fire-1",
	});
}

export default Component;
