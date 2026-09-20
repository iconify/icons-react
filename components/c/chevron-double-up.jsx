import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/w/wdkqou.css';
import '../../css/d/dfae3c.css';
import '../../css/s/so-from-12.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c wdkqou"/><path class="a0m25c dfae3c"/>`,
		"fallback": "line-md:chevron-double-up",
	});
}

export default Component;
