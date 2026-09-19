import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi-iagg1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi-iagg1m"/>`,
		"fallback": "fe:flag",
	});
}

export default Component;
