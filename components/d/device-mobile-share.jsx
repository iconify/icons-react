import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r05yhzm4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r05yhzm4r"/>`,
		"fallback": "tabler:device-mobile-share",
	});
}

export default Component;
