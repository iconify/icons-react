import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3k-2m9tb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3k-2m9tb"/>`,
		"fallback": "cbi:bridges-v2",
	});
}

export default Component;
