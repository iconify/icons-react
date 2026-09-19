import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fr6-kta2b.css';
import '../../css/y/y2-wh7hrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fr6-kta2b"/><path class="y2-wh7hrf"/></g>`,
		"fallback": "hugeicons:customer-service-01",
	});
}

export default Component;
