import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0gkm4b5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0gkm4b5g"/>`,
		"fallback": "uis:arrow-circle-right",
	});
}

export default Component;
