import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgjmi9bdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgjmi9bdt"/>`,
		"fallback": "withicons:circle-chevron-up-solid",
	});
}

export default Component;
