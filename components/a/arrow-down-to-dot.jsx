import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s33hyzb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s33hyzb0h"/>`,
		"fallback": "vadivam:arrow-down-to-dot",
	});
}

export default Component;
