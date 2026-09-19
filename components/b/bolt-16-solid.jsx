import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlx8kijip.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nlx8kijip"/>`,
		"fallback": "heroicons:bolt-16-solid",
	});
}

export default Component;
