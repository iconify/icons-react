import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6d5tp4hc.css';
import '../../css/a/aji04yosq.css';
import '../../css/w/wmxx11b3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6d5tp4hc"/><path class="aji04yosq"/><path class="wmxx11b3l"/>`,
		"fallback": "tdesign:animation-filled",
	});
}

export default Component;
