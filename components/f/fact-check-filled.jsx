import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulg-93b7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulg-93b7a"/>`,
		"fallback": "tdesign:fact-check-filled",
	});
}

export default Component;
