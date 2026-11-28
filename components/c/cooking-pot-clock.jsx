import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-p6cdbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-p6cdbch"/>`,
		"fallback": "noviair:cooking-pot-clock",
	});
}

export default Component;
