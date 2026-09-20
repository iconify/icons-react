import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnp3qpb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnp3qpb3i"/>`,
		"fallback": "thesvg-color:enpass",
	});
}

export default Component;
