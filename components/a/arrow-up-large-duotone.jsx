import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzq7745mj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzq7745mj"/>`,
		"fallback": "stash:arrow-up-large-duotone",
	});
}

export default Component;
