import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqqjysb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqqjysb6u"/>`,
		"fallback": "streamline-ultimate:bin-1",
	});
}

export default Component;
