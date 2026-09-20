import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm22d3dqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm22d3dqt"/>`,
		"fallback": "tdesign:chat-off-filled",
	});
}

export default Component;
