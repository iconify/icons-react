import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tke0wbcic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tke0wbcic"/>`,
		"fallback": "lucide:arrow-up-wide-narrow",
	});
}

export default Component;
