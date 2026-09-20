import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8kce2a0p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8kce2a0p"/>`,
		"fallback": "quill:force-batch",
	});
}

export default Component;
