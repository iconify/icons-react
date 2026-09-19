import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dccl6cslv.css';
import '../../css/a/a0a43bbqu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dccl6cslv"/><path class="a0a43bbqu"/>`,
		"fallback": "ei:gear",
	});
}

export default Component;
