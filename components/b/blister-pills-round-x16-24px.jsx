import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpj9vf5jt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wpj9vf5jt"/>`,
		"fallback": "healthicons:blister-pills-round-x16-24px",
	});
}

export default Component;
