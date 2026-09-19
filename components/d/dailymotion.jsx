import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpm8a6xpl.css';
import '../../css/y/yvc722b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpm8a6xpl"/><path class="yvc722b9s"/>`,
		"fallback": "fontisto:dailymotion",
	});
}

export default Component;
