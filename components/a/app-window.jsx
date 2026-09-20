import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j52-s_b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j52-s_b7y"/>`,
		"fallback": "tabler:app-window",
	});
}

export default Component;
