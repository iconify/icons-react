import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl-h9o8md.css';
import '../../css/e/eclqm_bbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl-h9o8md"/><path class="eclqm_bbe"/>`,
		"fallback": "solar:arrow-left-to-line-bold-duotone",
	});
}

export default Component;
