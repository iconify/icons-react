import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u21wudb0u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u21wudb0u"/>`,
		"fallback": "streamline-flex:file-bookmark-remix",
	});
}

export default Component;
