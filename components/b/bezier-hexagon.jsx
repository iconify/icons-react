import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q4lxjtl-h.css';
import '../../css/c/cqy2l-blp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q4lxjtl-h"/><path class="cqy2l-blp"/></g>`,
		"fallback": "glyphs-poly:bezier-hexagon",
	});
}

export default Component;
