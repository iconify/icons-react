import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c93967rjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c93967rjc"/>`,
		"fallback": "hugeicons:heading-04",
	});
}

export default Component;
