import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxbq8bc8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxbq8bc8i"/>`,
		"fallback": "ri:h-2",
	});
}

export default Component;
