import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_ifttmfg.css';
import '../../css/d/dq0sopoqg.css';
import '../../css/f/fqvivkbnm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c_ifttmfg"/><path class="dq0sopoqg"/><path class="fqvivkbnm"/></g>`,
		"fallback": "streamline-color:coffee-takeaway-cup",
	});
}

export default Component;
