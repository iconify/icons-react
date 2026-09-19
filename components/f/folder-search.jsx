import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erd8cq3wx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erd8cq3wx"/>`,
		"fallback": "ci:folder-search",
	});
}

export default Component;
