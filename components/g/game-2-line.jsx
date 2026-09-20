import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oly_l9ycs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oly_l9ycs"/>`,
		"fallback": "ri:game-2-line",
	});
}

export default Component;
