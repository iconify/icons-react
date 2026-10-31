import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haj0-xbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haj0-xbig"/>`,
		"fallback": "coolicons:container-fill-round",
	});
}

export default Component;
