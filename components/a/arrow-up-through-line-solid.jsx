import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cud7f3biu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cud7f3biu"/>`,
		"fallback": "iconaut:arrow-up-through-line-solid",
	});
}

export default Component;
