import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg9kfjb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg9kfjb2n"/>`,
		"fallback": "mdi:alarm-panel-outline",
	});
}

export default Component;
