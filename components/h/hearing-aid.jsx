import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzyv8xbll.css';
import '../../css/t/t8atr7bby.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzyv8xbll"/><path class="t8atr7bby"/>`,
		"fallback": "temaki:hearing-aid",
	});
}

export default Component;
