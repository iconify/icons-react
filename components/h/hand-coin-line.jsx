import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bly2_8yev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bly2_8yev"/>`,
		"fallback": "ri:hand-coin-line",
	});
}

export default Component;
