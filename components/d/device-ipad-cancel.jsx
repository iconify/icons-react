import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqfj2p6jf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqfj2p6jf"/>`,
		"fallback": "tabler:device-ipad-cancel",
	});
}

export default Component;
