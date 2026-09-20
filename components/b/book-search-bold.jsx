import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av-303pwd.css';
import '../../css/g/giz0u4e7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av-303pwd"/><path class="giz0u4e7m"/>`,
		"fallback": "streamline-ultimate:book-search-bold",
	});
}

export default Component;
