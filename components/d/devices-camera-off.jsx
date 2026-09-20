import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8if3ytuf.css';
import '../../css/y/yywevybdr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w8if3ytuf"/><path class="yywevybdr"/>`,
		"fallback": "streamline-block:devices-camera-off",
	});
}

export default Component;
