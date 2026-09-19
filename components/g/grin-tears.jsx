import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6n_p9b8l.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6n_p9b8l"/>`,
		"fallback": "fa-regular:grin-tears",
	});
}

export default Component;
