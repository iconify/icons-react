import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9sk2mszl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9sk2mszl"/>`,
		"fallback": "withicons:arrow-left-right-solid",
	});
}

export default Component;
