import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn5r_fhqa.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn5r_fhqa"/>`,
		"fallback": "lineicons:check-box",
	});
}

export default Component;
