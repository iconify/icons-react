import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g39pp1bdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g39pp1bdx"/>`,
		"fallback": "griddy-icons:flash-off-filled",
	});
}

export default Component;
