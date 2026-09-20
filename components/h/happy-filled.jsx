import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv0v1xbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv0v1xbne"/>`,
		"fallback": "tdesign:happy-filled",
	});
}

export default Component;
