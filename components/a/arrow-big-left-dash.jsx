import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd5fo2oke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd5fo2oke"/>`,
		"fallback": "vadivam:arrow-big-left-dash",
	});
}

export default Component;
