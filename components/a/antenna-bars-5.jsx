import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aamwa-sar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aamwa-sar"/>`,
		"fallback": "tabler:antenna-bars-5",
	});
}

export default Component;
