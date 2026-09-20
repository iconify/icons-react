import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/z31s4fm-k.css';
import '../../css/r/rj1d1b0ha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="z31s4fm-k"/><path class="rj1d1b0ha"/></g>`,
		"fallback": "streamline-logos:byte-logo",
	});
}

export default Component;
