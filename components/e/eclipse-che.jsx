import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea1gftbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea1gftbxi"/>`,
		"fallback": "thesvg:eclipse-che",
	});
}

export default Component;
