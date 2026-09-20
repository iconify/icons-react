import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gapgg0w6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gapgg0w6g"/>`,
		"fallback": "ri:arrow-up-line",
	});
}

export default Component;
