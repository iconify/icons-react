import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwibdw4bb.css';
import '../../css/q/qk8s8zblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwibdw4bb"/><path class="qk8s8zblm"/>`,
		"fallback": "boxicons:clock-1",
	});
}

export default Component;
