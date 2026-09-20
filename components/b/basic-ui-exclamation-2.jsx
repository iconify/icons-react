import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh064mfkl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zh064mfkl"/>`,
		"fallback": "streamline-block:basic-ui-exclamation-2",
	});
}

export default Component;
