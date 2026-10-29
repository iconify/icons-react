import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhi6qobkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhi6qobkj"/>`,
		"fallback": "vadivam:handle-bottom-right",
	});
}

export default Component;
