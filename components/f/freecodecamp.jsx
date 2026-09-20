import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etl9yb0xk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etl9yb0xk"/>`,
		"fallback": "thesvg:freecodecamp",
	});
}

export default Component;
