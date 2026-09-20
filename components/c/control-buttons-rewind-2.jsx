import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4_hh9bbg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y4_hh9bbg"/>`,
		"fallback": "streamline-block:control-buttons-rewind-2",
	});
}

export default Component;
