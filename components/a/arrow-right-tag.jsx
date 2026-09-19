import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g38i4jtvc.css';
import '../../css/n/niz-1xdux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="g38i4jtvc"/><path class="niz-1xdux"/></g>`,
		"fallback": "iconoir:arrow-right-tag",
	});
}

export default Component;
