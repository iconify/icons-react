import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy68ylbgq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy68ylbgq"/>`,
		"fallback": "selfhst:grass-io-dark",
	});
}

export default Component;
