import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyium1yvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyium1yvt"/>`,
		"fallback": "withicons:flower-gloss",
	});
}

export default Component;
