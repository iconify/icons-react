import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq0rpcpqq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq0rpcpqq"/>`,
		"fallback": "icon-park-outline:coronavirus",
	});
}

export default Component;
