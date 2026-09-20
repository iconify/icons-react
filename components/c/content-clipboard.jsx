import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/til6eg8hp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="til6eg8hp"/>`,
		"fallback": "streamline-block:content-clipboard",
	});
}

export default Component;
