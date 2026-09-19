import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pltu5hbxp.css';
import '../../css/o/oht-npb3i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pltu5hbxp"/><path class="oht-npb3i"/></g>`,
		"fallback": "glyphs:columns-2-duo",
	});
}

export default Component;
