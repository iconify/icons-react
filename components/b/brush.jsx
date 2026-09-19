import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edv7ufw0p.css';
import '../../css/r/r82uqwr_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer edv7ufw0p"/><path class="duoicon-secondary-layer r82uqwr_w"/>`,
		"fallback": "duo-icons:brush",
	});
}

export default Component;
