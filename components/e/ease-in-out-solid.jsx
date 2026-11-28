import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bckagbb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bckagbb8p"/>`,
		"fallback": "iconaut:ease-in-out-solid",
	});
}

export default Component;
