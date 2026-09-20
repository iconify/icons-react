import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8x-3xv9i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x8x-3xv9i"/>`,
		"fallback": "streamline-flex:bag-suitcase-4-remix",
	});
}

export default Component;
