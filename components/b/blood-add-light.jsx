import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pmny__b3u.css';
import '../../css/g/g8_-x3oyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pmny__b3u"/><path class="g8_-x3oyo"/></g>`,
		"fallback": "lets-icons:blood-add-light",
	});
}

export default Component;
