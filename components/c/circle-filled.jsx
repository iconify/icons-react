import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy6pat.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy6pat"/>`,
		"fallback": "line-md:circle-filled",
	});
}

export default Component;
