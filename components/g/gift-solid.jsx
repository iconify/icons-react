import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk5yjk1vh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk5yjk1vh"/>`,
		"fallback": "la:gift-solid",
	});
}

export default Component;
