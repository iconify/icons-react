import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5yuqmboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5yuqmboi"/>`,
		"fallback": "boxicons:arrow-up-circle-filled",
	});
}

export default Component;
