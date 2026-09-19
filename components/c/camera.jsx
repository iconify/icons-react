import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7ks1gvgt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7ks1gvgt"/>`,
		"fallback": "icomoon-free:camera",
	});
}

export default Component;
