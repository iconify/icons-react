import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-03f5vrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-03f5vrx"/>`,
		"fallback": "withicons:clock-check-gloss",
	});
}

export default Component;
