import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex9-ukb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex9-ukb8o"/>`,
		"fallback": "tabler:input-ai",
	});
}

export default Component;
