import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slk00objf.css';
import '../../css/w/wbyo_ts-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slk00objf"/><path class="wbyo_ts-z"/>`,
		"fallback": "streamline-ultimate:concert-dj-bold",
	});
}

export default Component;
