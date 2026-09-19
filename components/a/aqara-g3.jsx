import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_1aioerq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_1aioerq"/>`,
		"fallback": "cbi:aqara-g3",
	});
}

export default Component;
