import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw80_35gc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw80_35gc"/>`,
		"fallback": "guidance:accessible-exit-2",
	});
}

export default Component;
