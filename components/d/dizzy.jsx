import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-npdpb0r.css';
import '../../css/z/zt-kp8jtf.css';
import '../../css/k/klyk2tbno.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j-npdpb0r"><path class="zt-kp8jtf"/><path class="klyk2tbno"/></g>`,
		"fallback": "xero-emoji:dizzy",
	});
}

export default Component;
