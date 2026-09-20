import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzx73-76o.css';
import '../../css/f/f6hx_4p6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzx73-76o"/><path class="f6hx_4p6c"/>`,
		"fallback": "token:avinoc",
	});
}

export default Component;
