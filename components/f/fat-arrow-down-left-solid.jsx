import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjqu0sf-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjqu0sf-f"/>`,
		"fallback": "mynaui:fat-arrow-down-left-solid",
	});
}

export default Component;
