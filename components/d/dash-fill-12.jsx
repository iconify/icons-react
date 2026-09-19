import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg-rq_txf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg-rq_txf"/>`,
		"fallback": "garden:dash-fill-12",
	});
}

export default Component;
