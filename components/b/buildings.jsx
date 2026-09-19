import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxn26ubua.css';
import '../../css/i/inhewssvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxn26ubua"/><path class="inhewssvp"/>`,
		"fallback": "boxicons:buildings",
	});
}

export default Component;
