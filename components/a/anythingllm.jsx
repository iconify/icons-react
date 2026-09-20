import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq9b7uf9h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq9b7uf9h"/>`,
		"fallback": "selfhst:anythingllm",
	});
}

export default Component;
