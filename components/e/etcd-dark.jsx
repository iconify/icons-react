import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svjygv55w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svjygv55w"/>`,
		"fallback": "selfhst:etcd-dark",
	});
}

export default Component;
