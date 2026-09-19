import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if6e8ibdj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if6e8ibdj"/>`,
		"fallback": "fa7-solid:chevron-circle-down",
	});
}

export default Component;
