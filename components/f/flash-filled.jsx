import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh_0rk67u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh_0rk67u"/>`,
		"fallback": "reicon:flash-filled",
	});
}

export default Component;
