import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwyy-sbkn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwyy-sbkn"/>`,
		"fallback": "carbon:ai-governance-lifecycle",
	});
}

export default Component;
