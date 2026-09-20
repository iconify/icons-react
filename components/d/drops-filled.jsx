import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twhk86b2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twhk86b2m"/>`,
		"fallback": "reicon:drops-filled",
	});
}

export default Component;
