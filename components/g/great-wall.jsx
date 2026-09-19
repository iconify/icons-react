import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvsc3vbda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvsc3vbda"/>`,
		"fallback": "cbi:great-wall",
	});
}

export default Component;
