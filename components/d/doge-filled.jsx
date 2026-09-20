import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp2pneo0a.css';
import '../../css/p/p76fyjzyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp2pneo0a"/><path class="p76fyjzyh"/>`,
		"fallback": "tdesign:doge-filled",
	});
}

export default Component;
