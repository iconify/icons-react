import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi1xqabvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi1xqabvk"/>`,
		"fallback": "mynaui:arrow-down-right-square-solid",
	});
}

export default Component;
