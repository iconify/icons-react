import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz5obbc_q.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz5obbc_q"/>`,
		"fallback": "dinkie-icons:cursor-text-small",
	});
}

export default Component;
