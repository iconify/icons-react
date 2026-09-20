import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/betyx0-oa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="betyx0-oa"/>`,
		"fallback": "thesvg-color:douban-read",
	});
}

export default Component;
