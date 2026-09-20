import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7xt4ebhe.css';
import '../../css/q/q8d80dxoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7xt4ebhe"/><path class="q8d80dxoq"/>`,
		"fallback": "octicon:fold-down-24",
	});
}

export default Component;
