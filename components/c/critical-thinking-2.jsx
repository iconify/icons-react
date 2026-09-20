import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q5i80px5i.css';
import '../../css/z/zz7_a5b0z.css';
import '../../css/u/uda2ebbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q5i80px5i"/><path class="zz7_a5b0z"/><path class="uda2ebbrz"/></g>`,
		"fallback": "streamline-sharp:critical-thinking-2",
	});
}

export default Component;
