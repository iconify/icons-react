import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbmp02gqe.css';
import '../../css/y/y4rcvro_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wbmp02gqe"/><path class="y4rcvro_l"/>`,
		"fallback": "token:chz",
	});
}

export default Component;
