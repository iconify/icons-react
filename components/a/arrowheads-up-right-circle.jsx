import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6-k0_bex.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f6-k0_bex"/>`,
		"fallback": "streamline-block:arrowheads-up-right-circle",
	});
}

export default Component;
