import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xie0vpbck.css';
import '../../css/r/rp66vlbcn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xie0vpbck"/><path class="rp66vlbcn"/>`,
		"fallback": "carbon:closed-caption",
	});
}

export default Component;
