import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aykucooev.css';
import '../../css/u/u4k51g1wz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="aykucooev"/><path class="u4k51g1wz"/></g>`,
		"fallback": "cryptocurrency-color:etn",
	});
}

export default Component;
