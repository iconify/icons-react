import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykhcx6d8l.css';
import '../../css/w/ww40tqben.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykhcx6d8l"/><path class="ww40tqben"/>`,
		"fallback": "carbon:cloud-auditing",
	});
}

export default Component;
