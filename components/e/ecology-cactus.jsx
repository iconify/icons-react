import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdtmjzblg.css';
import '../../css/g/gx3ml1b9y.css';
import '../../css/l/lzz9wzsya.css';
import '../../css/i/isjb93bxb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdtmjzblg"/><path class="gx3ml1b9y"/><path class="lzz9wzsya"/><path class="isjb93bxb"/>`,
		"fallback": "streamline-pixel:ecology-cactus",
	});
}

export default Component;
