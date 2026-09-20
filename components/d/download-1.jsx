import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-fvzhlpv.css';
import '../../css/x/xmqhqyf1e.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-fvzhlpv"/><path class="xmqhqyf1e"/>`,
		"fallback": "lineicons:download-1",
	});
}

export default Component;
