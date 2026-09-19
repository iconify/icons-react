import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpytqzb7q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpytqzb7q"/>`,
		"fallback": "dinkie-icons:black-circle-for-record",
	});
}

export default Component;
