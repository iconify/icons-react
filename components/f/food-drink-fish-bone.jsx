import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx5x3u-1w.css';
import '../../css/u/u7gqq6bqf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx5x3u-1w"/><path class="u7gqq6bqf"/>`,
		"fallback": "streamline-pixel:food-drink-fish-bone",
	});
}

export default Component;
