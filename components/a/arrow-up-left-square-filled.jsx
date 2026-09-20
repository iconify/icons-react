import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixisz2b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ixisz2b4l"/>`,
		"fallback": "reicon:arrow-up-left-square-filled",
	});
}

export default Component;
