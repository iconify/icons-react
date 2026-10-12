import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezcsx0bdm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezcsx0bdm"/>`,
		"fallback": "garden:flag-stroke-20",
	});
}

export default Component;
