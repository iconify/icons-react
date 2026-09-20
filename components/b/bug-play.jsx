import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/ce1si_ibe.css';
import '../../css/u/uvj8ehppa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ce1si_ibe"/><path class="uvj8ehppa"/></g>`,
		"fallback": "proicons:bug-play",
	});
}

export default Component;
