import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n7sugib3z.css';
import '../../css/u/urd-96jth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="n7sugib3z"/><path class="urd-96jth"/></g>`,
		"fallback": "streamline-sharp:fragile",
	});
}

export default Component;
