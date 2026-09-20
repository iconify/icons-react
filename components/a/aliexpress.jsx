import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuc4qxb-w.css';
import '../../css/n/n3l1s8lfb.css';
import '../../css/g/gy3y47_du.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuc4qxb-w"/><path class="n3l1s8lfb"/><path class="gy3y47_du"/>`,
		"fallback": "selfhst:aliexpress",
	});
}

export default Component;
