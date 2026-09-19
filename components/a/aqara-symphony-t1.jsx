import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz0nrs-zq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz0nrs-zq"/>`,
		"fallback": "cbi:aqara-symphony-t1",
	});
}

export default Component;
