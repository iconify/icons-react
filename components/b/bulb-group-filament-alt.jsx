import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6n9ygbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6n9ygbzj"/>`,
		"fallback": "cbi:bulb-group-filament-alt",
	});
}

export default Component;
