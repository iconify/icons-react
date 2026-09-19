import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvo81jd5y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvo81jd5y"/>`,
		"fallback": "ion:android-share",
	});
}

export default Component;
