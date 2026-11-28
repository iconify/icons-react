import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qupa7dizo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qupa7dizo"/>`,
		"fallback": "iconaut:dice-d8-solid",
	});
}

export default Component;
