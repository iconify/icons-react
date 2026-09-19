import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_v81wbfx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_v81wbfx"/>`,
		"fallback": "bi:cloud-check-fill",
	});
}

export default Component;
