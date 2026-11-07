import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly-_et2sc.css';
import '../../css/x/xp5j9_8ij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly-_et2sc"/><path class="xp5j9_8ij"/>`,
		"fallback": "solar:call-chat-bold-duotone",
	});
}

export default Component;
