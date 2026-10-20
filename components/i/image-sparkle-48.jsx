import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rthtgrrbd.css';
import '../../css/y/y-pv_ev0y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rthtgrrbd"/><path class="y-pv_ev0y"/>`,
		"fallback": "energy-icons:image-sparkle-48",
	});
}

export default Component;
