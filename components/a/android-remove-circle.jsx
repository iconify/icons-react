import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zutc_xbgy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zutc_xbgy"/>`,
		"fallback": "ion:android-remove-circle",
	});
}

export default Component;
