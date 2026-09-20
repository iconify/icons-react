import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_w-hxjse.css';
import '../../css/w/w7drs3o1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_w-hxjse"/><path class="w7drs3o1k"/>`,
		"fallback": "pixel:bug",
	});
}

export default Component;
