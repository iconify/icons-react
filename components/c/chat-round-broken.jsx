import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syeh_zq2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syeh_zq2o"/>`,
		"fallback": "solar:chat-round-broken",
	});
}

export default Component;
