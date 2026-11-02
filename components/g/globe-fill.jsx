import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dttqe79at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dttqe79at"/>`,
		"fallback": "mingcute:globe-fill",
	});
}

export default Component;
