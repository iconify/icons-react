import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy4x7jter.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wy4x7jter"/>`,
		"fallback": "streamline-block:control-buttons-fast-forward-2",
	});
}

export default Component;
