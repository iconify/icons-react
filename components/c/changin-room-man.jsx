import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brs0dzbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brs0dzbue"/>`,
		"fallback": "guidance:changin-room-man",
	});
}

export default Component;
