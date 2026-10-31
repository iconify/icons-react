import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfhkbs4kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfhkbs4kt"/>`,
		"fallback": "coolicons:arrow-turn-up-left-duocolor-round",
	});
}

export default Component;
