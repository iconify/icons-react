import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0v3-lpsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0v3-lpsq"/>`,
		"fallback": "reicon:happyemoji-filled",
	});
}

export default Component;
