import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrdmjfb_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrdmjfb_n"/>`,
		"fallback": "selfhst:haproxy-cluster-manager-light",
	});
}

export default Component;
