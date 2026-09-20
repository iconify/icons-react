import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k14xt0b7z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k14xt0b7z"/>`,
		"fallback": "octicon:bookmark-slash-fill-16",
	});
}

export default Component;
