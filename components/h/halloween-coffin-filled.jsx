import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqjs8aclk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqjs8aclk"/>`,
		"fallback": "griddy-icons:halloween-coffin-filled",
	});
}

export default Component;
