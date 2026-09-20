import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/m/m9j5ub.css';
import '../../css/f/fyy_6k.css';
import '../../css/s/so-from-14.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c m9j5ub"/><path class="a0m25c fyy_6k"/>`,
		"fallback": "line-md:arrows-vertical-alt",
	});
}

export default Component;
