import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihcuxaciq.css';
import '../../css/k/k7b4y2y0p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihcuxaciq"/><path class="k7b4y2y0p"/>`,
		"fallback": "selfhst:espocrm",
	});
}

export default Component;
