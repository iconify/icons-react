import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo7q6vbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo7q6vbsc"/>`,
		"fallback": "cbi:chromecast",
	});
}

export default Component;
