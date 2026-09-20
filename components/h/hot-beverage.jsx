import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z8yjq9b6b.css';
import '../../css/d/d-y6jsx4h.css';
import '../../css/p/p2ag53bhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z8yjq9b6b"/><path class="d-y6jsx4h"/><path class="p2ag53bhg"/></g>`,
		"fallback": "streamline-cyber-color:hot-beverage",
	});
}

export default Component;
