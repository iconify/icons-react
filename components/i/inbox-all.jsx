import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw6n93ogd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw6n93ogd"/>`,
		"fallback": "pixelarticons:inbox-all",
	});
}

export default Component;
