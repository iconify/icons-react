import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwvsfxegk.css';
import '../../css/o/oswy_sbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vwvsfxegk"/><path class="oswy_sbya"/>`,
		"fallback": "solar:gallery-favorite-bold",
	});
}

export default Component;
