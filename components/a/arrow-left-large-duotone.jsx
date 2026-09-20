import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt4wtjaxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt4wtjaxe"/>`,
		"fallback": "stash:arrow-left-large-duotone",
	});
}

export default Component;
