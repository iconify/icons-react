import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trn3j9qcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trn3j9qcp"/>`,
		"fallback": "weui:done-filled",
	});
}

export default Component;
