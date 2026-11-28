import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4mnz2bcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4mnz2bcj"/>`,
		"fallback": "noviair:bowl-heart",
	});
}

export default Component;
