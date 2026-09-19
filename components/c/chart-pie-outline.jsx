import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/geqlomvlm.css';
import '../../css/c/c_424v5ic.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="geqlomvlm"/><path class="c_424v5ic"/></g>`,
		"fallback": "glyphs:chart-pie-outline",
	});
}

export default Component;
