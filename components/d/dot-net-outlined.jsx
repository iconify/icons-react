import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmqiz0x_p.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmqiz0x_p"/>`,
		"fallback": "ant-design:dot-net-outlined",
	});
}

export default Component;
