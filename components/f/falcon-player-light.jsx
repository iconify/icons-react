import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc9w6xbei.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc9w6xbei"/>`,
		"fallback": "selfhst:falcon-player-light",
	});
}

export default Component;
