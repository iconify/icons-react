import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9b3_-bgn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9b3_-bgn"/>`,
		"fallback": "energy-icons:earbuds-20",
	});
}

export default Component;
