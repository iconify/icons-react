import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjc6lacrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjc6lacrl"/>`,
		"fallback": "withicons:arrow-up-from-line-solid",
	});
}

export default Component;
