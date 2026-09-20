import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jaaxpcc_n.css';
import '../../css/o/o44440b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jaaxpcc_n"/><path class="o44440b6w"/></g>`,
		"fallback": "streamline-sharp:browser-error",
	});
}

export default Component;
