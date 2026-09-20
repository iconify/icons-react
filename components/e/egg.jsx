import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_2t8xb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_2t8xb6s"/>`,
		"fallback": "lucide:egg",
	});
}

export default Component;
