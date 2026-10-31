import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow11ylbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow11ylbdq"/>`,
		"fallback": "withicons:cooking-pot-gloss",
	});
}

export default Component;
