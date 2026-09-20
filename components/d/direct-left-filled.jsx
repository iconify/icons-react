import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck8zkmb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck8zkmb-e"/>`,
		"fallback": "reicon:direct-left-filled",
	});
}

export default Component;
