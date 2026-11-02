import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2o65lcwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2o65lcwr"/>`,
		"fallback": "mingcute:arrow-left-fill",
	});
}

export default Component;
