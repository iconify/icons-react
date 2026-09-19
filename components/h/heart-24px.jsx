import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffmxou07g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffmxou07g"/>`,
		"fallback": "healthicons:heart-24px",
	});
}

export default Component;
