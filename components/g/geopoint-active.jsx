import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-b9rebna.css';
import '../../css/j/j12mv17hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u-b9rebna"/><path class="j12mv17hn"/>`,
		"fallback": "nrk:geopoint-active",
	});
}

export default Component;
