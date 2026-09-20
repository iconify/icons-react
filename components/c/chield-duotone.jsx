import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upnywkbgf.css';
import '../../css/v/vssr6lrmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upnywkbgf"/><path class="vssr6lrmg"/>`,
		"fallback": "lets-icons:chield-duotone",
	});
}

export default Component;
