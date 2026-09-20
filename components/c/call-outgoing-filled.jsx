import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfkk76bfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfkk76bfi"/>`,
		"fallback": "reicon:call-outgoing-filled",
	});
}

export default Component;
