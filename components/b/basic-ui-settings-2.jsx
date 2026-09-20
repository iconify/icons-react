import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0r4fir6h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b0r4fir6h"/>`,
		"fallback": "streamline-block:basic-ui-settings-2",
	});
}

export default Component;
