import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp5j9_8ij.css';
import '../../css/x/x6g9eebag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp5j9_8ij"/><path class="x6g9eebag"/>`,
		"fallback": "solar:call-chat-rounded-bold-duotone",
	});
}

export default Component;
