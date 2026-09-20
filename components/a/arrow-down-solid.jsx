import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d598p2b4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d598p2b4p"/>`,
		"fallback": "stash:arrow-down-solid",
	});
}

export default Component;
