import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvgy20fzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvgy20fzr"/>`,
		"fallback": "cbi:hoopla",
	});
}

export default Component;
