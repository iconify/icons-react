import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/websu8mzr.css';
import '../../css/y/y21qddbac.css';
import '../../css/x/x7m-3pw3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="websu8mzr"/><path class="y21qddbac"/><path class="x7m-3pw3h"/></g>`,
		"fallback": "hugeicons:basketball-02",
	});
}

export default Component;
