import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sfybevbjo.css';
import '../../css/d/d4io04i0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sfybevbjo"/><path class="d4io04i0z"/></g>`,
		"fallback": "si:inflight-duotone",
	});
}

export default Component;
