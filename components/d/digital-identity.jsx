import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p37_k_s9p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p37_k_s9p"/>`,
		"fallback": "carbon:digital-identity",
	});
}

export default Component;
