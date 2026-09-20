import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwcv33b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iwcv33b4d"/>`,
		"fallback": "reicon:bookmark-square2",
	});
}

export default Component;
