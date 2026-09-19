import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b8iq72bsm.css';
import '../../css/d/dtfkgbc7m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b8iq72bsm"/><path class="dtfkgbc7m"/></g>`,
		"fallback": "glyphs:arrow-long-duo",
	});
}

export default Component;
