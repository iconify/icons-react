import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyyvzf4ru.css';
import '../../css/v/vlxt_3bwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyyvzf4ru"/><path class="vlxt_3bwu"/>`,
		"fallback": "uim:corner-down-right",
	});
}

export default Component;
