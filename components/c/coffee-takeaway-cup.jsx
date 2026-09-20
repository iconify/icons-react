import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1l9ex7qa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1l9ex7qa"/>`,
		"fallback": "streamline:coffee-takeaway-cup",
	});
}

export default Component;
