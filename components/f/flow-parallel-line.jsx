import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqa9w_8tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqa9w_8tr"/>`,
		"fallback": "si:flow-parallel-line",
	});
}

export default Component;
