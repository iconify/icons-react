import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d1go2ob_j.css';
import '../../css/t/t7v5ahmne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d1go2ob_j"/><path class="t7v5ahmne"/></g>`,
		"fallback": "lucide:forward",
	});
}

export default Component;
