import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz3av-bkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fz3av-bkl"/>`,
		"fallback": "reicon:dollar",
	});
}

export default Component;
