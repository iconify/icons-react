import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kswv2hrkj.css';
import '../../css/m/mqmycj9zd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kswv2hrkj"/><path class="mqmycj9zd"/>`,
		"fallback": "solar:chat-round-off-bold-duotone",
	});
}

export default Component;
