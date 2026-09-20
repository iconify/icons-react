import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phn7wxb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phn7wxb6e"/>`,
		"fallback": "tdesign:dialog-history-filled",
	});
}

export default Component;
