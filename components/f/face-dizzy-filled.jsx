import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmz_4mbgd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmz_4mbgd"/>`,
		"fallback": "carbon:face-dizzy-filled",
	});
}

export default Component;
