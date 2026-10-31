import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_1yhbbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_1yhbbrz"/>`,
		"fallback": "coolicons:heading-1-fill-round",
	});
}

export default Component;
