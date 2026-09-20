import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_81o0h_n.css';
import '../../css/t/tghk--3go.css';
import '../../css/p/p2m2ozbfu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d_81o0h_n"/><path class="tghk--3go"/><path clip-rule="evenodd" class="p2m2ozbfu"/></g>`,
		"fallback": "streamline-color:controller-flat",
	});
}

export default Component;
