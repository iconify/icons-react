import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne4u3pz3h.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne4u3pz3h"/>`,
		"fallback": "f7:arrow-right-circle-fill",
	});
}

export default Component;
