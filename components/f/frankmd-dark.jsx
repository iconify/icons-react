import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snaubdbur.css';
import '../../css/k/k3cps1u4h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snaubdbur"/><path class="k3cps1u4h"/>`,
		"fallback": "selfhst:frankmd-dark",
	});
}

export default Component;
