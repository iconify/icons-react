import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2icc0b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2icc0b3i"/>`,
		"fallback": "pixel:hashtag",
	});
}

export default Component;
