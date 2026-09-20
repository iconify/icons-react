import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vvtc2vb0w.css';
import '../../css/v/vn660gjza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vvtc2vb0w"/><path class="vn660gjza"/></g>`,
		"fallback": "streamline-sharp:alien",
	});
}

export default Component;
