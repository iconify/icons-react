import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad0u0jetp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad0u0jetp"/>`,
		"fallback": "coolicons:distribute-vertical-fill-round",
	});
}

export default Component;
