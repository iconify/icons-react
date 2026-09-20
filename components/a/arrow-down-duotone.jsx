import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbw7_8o6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbw7_8o6b"/>`,
		"fallback": "stash:arrow-down-duotone",
	});
}

export default Component;
