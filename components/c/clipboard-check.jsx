import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd-w0-blg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qd-w0-blg"/>`,
		"fallback": "reicon:clipboard-check",
	});
}

export default Component;
