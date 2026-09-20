import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/d/ddx_6x.css';
import '../../css/d/d-uxzh.css';
import '../../css/i/idmydr.css';
import '../../css/s/so-to-0.css';
import '../../css/s/so-from-20.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c ddx_6x"/><path class="a0m25c d-uxzh"/><path class="a0m25c idmydr"/>`,
		"fallback": "line-md:edit",
	});
}

export default Component;
