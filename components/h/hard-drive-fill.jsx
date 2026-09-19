import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj1xpbb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj1xpbb6b"/>`,
		"fallback": "eva:hard-drive-fill",
	});
}

export default Component;
