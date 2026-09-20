import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv13xuqdl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv13xuqdl"/>`,
		"fallback": "streamline-block:basic-arrows-down-left",
	});
}

export default Component;
