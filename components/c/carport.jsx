import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytm_8fbgd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytm_8fbgd"/>`,
		"fallback": "temaki:carport",
	});
}

export default Component;
