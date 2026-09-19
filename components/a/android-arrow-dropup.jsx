import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr0vp1bbm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr0vp1bbm"/>`,
		"fallback": "ion:android-arrow-dropup",
	});
}

export default Component;
