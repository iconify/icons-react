import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kremzy3_m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kremzy3_m"/>`,
		"fallback": "selfhst:android-police-dark",
	});
}

export default Component;
