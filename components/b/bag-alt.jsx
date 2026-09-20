import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjpi7urvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjpi7urvi"/>`,
		"fallback": "uil:bag-alt",
	});
}

export default Component;
