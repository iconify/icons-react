import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxwr1k8hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxwr1k8hq"/>`,
		"fallback": "mdi:emoticon-panda",
	});
}

export default Component;
