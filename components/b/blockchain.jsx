import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6lc9cc4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6lc9cc4l"/>`,
		"fallback": "eos-icons:blockchain",
	});
}

export default Component;
