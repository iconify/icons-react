import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn3dr3d8s.css';
import '../../css/l/l5yoditpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn3dr3d8s"/><circle class="l5yoditpm"/>`,
		"fallback": "bx:bxs-disc",
	});
}

export default Component;
