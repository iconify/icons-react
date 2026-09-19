import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p01z6lbzt.css';
import '../../css/l/lp8ctrzgz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p01z6lbzt"/><path class="lp8ctrzgz"/>`,
		"fallback": "carbon:align-box-bottom-left",
	});
}

export default Component;
