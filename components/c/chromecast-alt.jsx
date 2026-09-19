import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu_6rwb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu_6rwb-u"/>`,
		"fallback": "cbi:chromecast-alt",
	});
}

export default Component;
