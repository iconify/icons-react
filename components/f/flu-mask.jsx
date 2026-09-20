import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/virsfrbwz.css';
import '../../css/w/wg13-4a9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="virsfrbwz"/><path class="wg13-4a9u"/></g>`,
		"fallback": "streamline-sharp:flu-mask",
	});
}

export default Component;
