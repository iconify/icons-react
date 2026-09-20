import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7228lb7i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7228lb7i"/>`,
		"fallback": "selfhst:anythingllm-light",
	});
}

export default Component;
