import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3_8h7bqu.css';
import '../../css/h/h1yxmgitg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3_8h7bqu"/><path class="h1yxmgitg"/>`,
		"fallback": "tdesign:camera-1-filled",
	});
}

export default Component;
