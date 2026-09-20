import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq3xmi0yu.css';
import '../../css/n/nvqrqlbpx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq3xmi0yu"/><path class="nvqrqlbpx"/>`,
		"fallback": "selfhst:baikal-dark",
	});
}

export default Component;
