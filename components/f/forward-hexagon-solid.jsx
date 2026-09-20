import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otm8rob9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otm8rob9d"/>`,
		"fallback": "mynaui:forward-hexagon-solid",
	});
}

export default Component;
