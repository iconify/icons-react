import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkia4r3ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkia4r3ns"/>`,
		"fallback": "withicons:ghost-gloss",
	});
}

export default Component;
