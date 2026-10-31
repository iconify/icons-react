import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yth53kq-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yth53kq-o"/>`,
		"fallback": "withicons:archive-gloss",
	});
}

export default Component;
