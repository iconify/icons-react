import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pybrbcb0k.css';
import '../../css/k/ktwj2bcgu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pybrbcb0k"/><path class="ktwj2bcgu"/>`,
		"fallback": "selfhst:hyvor-relay-dark",
	});
}

export default Component;
