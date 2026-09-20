import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh80sfblh.css';
import '../../css/t/t7bv4xpss.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh80sfblh"/><path class="t7bv4xpss"/>`,
		"fallback": "streamline-pixel:hand-point",
	});
}

export default Component;
