import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk4gz-bbp.css';
import '../../css/a/afn_zrbzk.css';
import '../../css/v/vcstj9lyw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk4gz-bbp"/><path class="afn_zrbzk"/><path class="vcstj9lyw"/>`,
		"fallback": "ion:android-notifications-off",
	});
}

export default Component;
