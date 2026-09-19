import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2_lbuban.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2_lbuban"/>`,
		"fallback": "garden:dash-stroke-12",
	});
}

export default Component;
