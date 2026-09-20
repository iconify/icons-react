import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_nwxbb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_nwxbb1u"/>`,
		"fallback": "reicon:element4",
	});
}

export default Component;
