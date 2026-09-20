import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2gb0y6gz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2gb0y6gz"/>`,
		"fallback": "si:ai-smartphone-line",
	});
}

export default Component;
