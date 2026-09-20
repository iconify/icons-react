import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj03jsb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj03jsb1k"/>`,
		"fallback": "octicon:bookmark-fill-24",
	});
}

export default Component;
