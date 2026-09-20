import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpylgqi0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpylgqi0g"/>`,
		"fallback": "mynaui:haze",
	});
}

export default Component;
