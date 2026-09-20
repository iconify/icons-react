import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usa9yzfgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usa9yzfgx"/>`,
		"fallback": "majesticons:hand-pointer",
	});
}

export default Component;
