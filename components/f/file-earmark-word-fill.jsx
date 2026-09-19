import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-26_wjkl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-26_wjkl"/>`,
		"fallback": "bi:file-earmark-word-fill",
	});
}

export default Component;
