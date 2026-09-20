import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh3kbwobr.css';
import '../../css/a/a321_xb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh3kbwobr"/><path clip-rule="evenodd" class="a321_xb9d"/>`,
		"fallback": "stash:data-date-solid",
	});
}

export default Component;
