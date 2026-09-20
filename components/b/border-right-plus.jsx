import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0rp55rgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0rp55rgj"/>`,
		"fallback": "tabler:border-right-plus",
	});
}

export default Component;
