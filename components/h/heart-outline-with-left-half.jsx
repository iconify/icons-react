import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcb7n_v4a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcb7n_v4a"/>`,
		"fallback": "pinhead:heart-outline-with-left-half",
	});
}

export default Component;
