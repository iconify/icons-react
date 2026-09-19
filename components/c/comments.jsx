import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwmtacbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwmtacbdv"/>`,
		"fallback": "fe:comments",
	});
}

export default Component;
