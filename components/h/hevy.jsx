import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv51zcb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv51zcb0l"/>`,
		"fallback": "thesvg-color:hevy",
	});
}

export default Component;
