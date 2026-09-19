import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl9ltt5qx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zl9ltt5qx"/>`,
		"fallback": "gravity-ui:bars-ascending-align-left-arrow-up",
	});
}

export default Component;
