import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv6f-v97w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv6f-v97w"/>`,
		"fallback": "tabler:heart-code",
	});
}

export default Component;
