import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uy7yc_pvs.css';
import '../../css/r/ry01t6waz.css';
import '../../css/k/ki9b28bbv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uy7yc_pvs"/><path class="ry01t6waz"/><path class="ki9b28bbv"/></g>`,
		"fallback": "glyphs:door-open-1-bold",
	});
}

export default Component;
