import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jserojq_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jserojq_n"/>`,
		"fallback": "coolicons:cursor-fill-round",
	});
}

export default Component;
