import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw0ueac3u.css';
import '../../css/c/ctaewz5_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw0ueac3u"/><path class="ctaewz5_j"/>`,
		"fallback": "token:bmx",
	});
}

export default Component;
