import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r51w4ibnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r51w4ibnc"/>`,
		"fallback": "coolicons:chevron-down-small-duocolor-round",
	});
}

export default Component;
