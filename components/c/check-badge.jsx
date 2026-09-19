import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xfueqpbht.css';
import '../../css/t/t495_9b2j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xfueqpbht"/><path class="t495_9b2j"/></g>`,
		"fallback": "glyphs-poly:check-badge",
	});
}

export default Component;
