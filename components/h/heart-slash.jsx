import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re4ubykje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re4ubykje"/>`,
		"fallback": "sidekickicons:heart-slash",
	});
}

export default Component;
