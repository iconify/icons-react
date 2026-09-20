import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-gecly6p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-gecly6p"/>`,
		"fallback": "streamline-block:basic-arrows-up-right",
	});
}

export default Component;
