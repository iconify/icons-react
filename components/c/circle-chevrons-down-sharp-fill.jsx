import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svc3u7xlm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svc3u7xlm"/>`,
		"fallback": "keyline-icons:circle-chevrons-down-sharp-fill",
	});
}

export default Component;
