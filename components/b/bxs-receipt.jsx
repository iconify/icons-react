import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml_qa0sac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml_qa0sac"/>`,
		"fallback": "bx:bxs-receipt",
	});
}

export default Component;
