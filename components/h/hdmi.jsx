import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuv7dvbxa.css';
import '../../css/f/fvzirrn2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuv7dvbxa"/><path class="fvzirrn2s"/>`,
		"fallback": "boxicons:hdmi",
	});
}

export default Component;
