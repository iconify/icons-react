import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_m1lbgnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q_m1lbgnk"/>`,
		"fallback": "streamline-logos:fandom-logo-1-block",
	});
}

export default Component;
