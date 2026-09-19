import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6r8n0old.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6r8n0old"/>`,
		"fallback": "bi:arrow-down-square-fill",
	});
}

export default Component;
