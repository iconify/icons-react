import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmwuo7c7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmwuo7c7q"/>`,
		"fallback": "mynaui:info-octagon-solid",
	});
}

export default Component;
