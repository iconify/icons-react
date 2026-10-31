import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al_q3lsyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al_q3lsyt"/>`,
		"fallback": "coolicons:bookmark-minus-round",
	});
}

export default Component;
