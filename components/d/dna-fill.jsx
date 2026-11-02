import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvlfp99rn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvlfp99rn"/>`,
		"fallback": "mingcute:dna-fill",
	});
}

export default Component;
