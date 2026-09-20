import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skn_peb5n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skn_peb5n"/>`,
		"fallback": "selfhst:anythingllm-dark",
	});
}

export default Component;
