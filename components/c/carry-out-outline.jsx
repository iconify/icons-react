import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypux_xb_v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypux_xb_v"/>`,
		"fallback": "ant-design:carry-out-outline",
	});
}

export default Component;
