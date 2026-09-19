import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vodrtwb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vodrtwb3g"/>`,
		"fallback": "boxicons:baseball-filled",
	});
}

export default Component;
