import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjs49zbtm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjs49zbtm"/>`,
		"fallback": "selfhst:etcd",
	});
}

export default Component;
