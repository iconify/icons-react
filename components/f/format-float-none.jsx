import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwvs1xbwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwvs1xbwo"/>`,
		"fallback": "mdi:format-float-none",
	});
}

export default Component;
