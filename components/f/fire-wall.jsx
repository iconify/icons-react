import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l2lcukb0j.css';
import '../../css/i/i_ntav1ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="l2lcukb0j"/><path class="i_ntav1ls"/></g>`,
		"fallback": "streamline-sharp:fire-wall",
	});
}

export default Component;
