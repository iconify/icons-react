import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmvg3yb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmvg3yb7q"/>`,
		"fallback": "reicon:box3-filled",
	});
}

export default Component;
