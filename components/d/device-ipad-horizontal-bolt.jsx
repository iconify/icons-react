import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko8ti6cjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko8ti6cjn"/>`,
		"fallback": "tabler:device-ipad-horizontal-bolt",
	});
}

export default Component;
