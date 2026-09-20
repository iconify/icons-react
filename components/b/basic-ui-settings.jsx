import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew__pnb5s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ew__pnb5s"/>`,
		"fallback": "streamline-block:basic-ui-settings",
	});
}

export default Component;
