import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo775lb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo775lb0l"/>`,
		"fallback": "ri:figma-line",
	});
}

export default Component;
