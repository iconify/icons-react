import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q74bkpbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q74bkpbtu"/>`,
		"fallback": "tdesign:city-6-filled",
	});
}

export default Component;
