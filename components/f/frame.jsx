import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss-z11x0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss-z11x0a"/>`,
		"fallback": "lucide:frame",
	});
}

export default Component;
