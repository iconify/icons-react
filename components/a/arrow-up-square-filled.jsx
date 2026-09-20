import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmz8-hbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rmz8-hbrq"/>`,
		"fallback": "reicon:arrow-up-square-filled",
	});
}

export default Component;
