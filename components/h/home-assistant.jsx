import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-6xlb0ma.css';
import '../../css/j/jxxo5_2qq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-6xlb0ma"/><path class="jxxo5_2qq"/>`,
		"fallback": "selfhst:home-assistant",
	});
}

export default Component;
