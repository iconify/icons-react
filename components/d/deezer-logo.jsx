import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw76jf7vg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw76jf7vg"/>`,
		"fallback": "cbi:deezer-logo",
	});
}

export default Component;
