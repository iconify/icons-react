import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjs1qqrvo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjs1qqrvo"/>`,
		"fallback": "ion:android-arrow-down",
	});
}

export default Component;
