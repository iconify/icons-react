import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1i32sk4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1i32sk4o"/>`,
		"fallback": "reicon:aquarius",
	});
}

export default Component;
