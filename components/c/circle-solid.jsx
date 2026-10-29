import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkf82twio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkf82twio"/>`,
		"fallback": "withicons:circle-solid",
	});
}

export default Component;
