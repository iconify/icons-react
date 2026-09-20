import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-xq3_bqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-xq3_bqz"/>`,
		"fallback": "reicon:book2-filled",
	});
}

export default Component;
