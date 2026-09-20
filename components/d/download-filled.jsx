import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnt9_cbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnt9_cbtg"/>`,
		"fallback": "weui:download-filled",
	});
}

export default Component;
