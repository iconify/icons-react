import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfs_5s1wx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfs_5s1wx"/>`,
		"fallback": "ri:close-line",
	});
}

export default Component;
