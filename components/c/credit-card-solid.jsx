import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5__nsf_c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5__nsf_c"/>`,
		"fallback": "rivet-icons:credit-card-solid",
	});
}

export default Component;
