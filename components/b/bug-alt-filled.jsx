import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc9z1mbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc9z1mbef"/>`,
		"fallback": "boxicons:bug-alt-filled",
	});
}

export default Component;
