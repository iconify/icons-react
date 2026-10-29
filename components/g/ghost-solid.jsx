import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv32cqbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv32cqbyj"/>`,
		"fallback": "withicons:ghost-solid",
	});
}

export default Component;
