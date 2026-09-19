import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bno6c1bol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bno6c1bol"/>`,
		"fallback": "guidance:amusement-park",
	});
}

export default Component;
