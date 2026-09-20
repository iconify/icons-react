import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cy923qqxz.css';
import '../../css/o/owm4kbtec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cy923qqxz"/><path class="owm4kbtec"/></g>`,
		"fallback": "streamline-sharp:align-back-2",
	});
}

export default Component;
