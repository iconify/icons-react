import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryi47hrkh.css';
import '../../css/h/h41dyrd2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryi47hrkh"/><path class="h41dyrd2o"/>`,
		"fallback": "boxicons:bookmarks",
	});
}

export default Component;
