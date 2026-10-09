import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7vk3y3bo.css';
import '../../css/r/rpx2p260d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7vk3y3bo"/><path class="rpx2p260d"/>`,
		"fallback": "energy-icons:burger-48-bold",
	});
}

export default Component;
